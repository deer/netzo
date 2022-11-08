import { createFetch } from "../fetch/mod.ts";
import { ClientBuilder } from "../fetch/types.ts";
import {
  IRequest,
  IService,
  ServiceClient,
  ServiceRequestClient,
} from "./types.ts";
import { $fetch } from "https://esm.sh/ohmyfetch@0.4.18";
import replace from "https://esm.sh/object-replace-mustache@1.0.2";
import { deepMerge } from "https://deno.land/std@0.157.0/collections/deep_merge.ts";
import { importFromStringByName } from "./utils.ts";

const createServiceRequest = async (
  ref: IRequest,
): Promise<ServiceRequestClient> => {
  // [variables] adds support for templated options via {{•}} syntax
  const { variables = {} } = ref;
  const { base, url, method, headers, body, hooks } = replace(
    ref,
    variables,
  );
  const href = base?.baseURL
    ? new URL(url, base.baseURL).href
    : new URL(url).href;

  const request = new Request(href, {
    method: method.toUpperCase(),
    headers,
    body: ["GET", "HEAD"].includes(method) ? undefined : body,
  });

  const baseHooks = await importFromStringByName(base?.hooks)
  const requestHooks = await importFromStringByName(hooks)

  const invoke = async () => {
    const response = await $fetch.raw(request, {
      method,
      headers,
      body: ["GET", "HEAD"].includes(method) ? undefined : body,
      async onRequest(ctx) {
        await baseHooks?.onRequest?.(ctx);
        await requestHooks?.onRequest?.(ctx);
      },
      async onRequestError(ctx) {
        await baseHooks?.onRequestError?.(ctx);
        await requestHooks?.onRequestError?.(ctx);
      },
      async onResponse(ctx) {
        await baseHooks?.onResponse?.(ctx);
        await requestHooks?.onResponse?.(ctx);
      },
      async onResponseError(ctx) {
        await baseHooks?.onResponseError?.(ctx);
        await requestHooks?.onResponseError?.(ctx);
      },
    });
    return response._data;
  };

  return { request, invoke, ref };
};

export const createService = (api: ClientBuilder) => {
  return async (service: string | IService): Promise<ServiceClient> => {
    const ref = typeof service === 'string'
      ? await api.services[service].get<IService>()
      : service;
    const client = createFetch(ref.base);

    const requests: ServiceClient["requests"] = ref.requests
      // [associate] injects inherited properties into 'ref' property
      .map((request) => deepMerge<IRequest>(request, { ref }))
      // [inheritance] deep-merges ref.base to request itself
      .reduce(async (previousValue, request, index) => {
        const mergedRequest = deepMerge<IRequest>(
          request.base as Partial<IRequest>,
          request,
        );
        const serviceRequest = await createServiceRequest(mergedRequest);
        return {
          ...previousValue,
          [index]: serviceRequest, // access entire service request by index
          [request.name]: serviceRequest.invoke, // alias to invoke by name
        };
      }, {});

    return { client, requests, ref }; // see NOTE bellow
  };
};

// NOTE: cannot return client directly like "return client"
// nor use spread operator like "return { ...client, {...})" nor
// "return Object.assign(client, {...})" somehow since client is
// a Proxy object so we return a new object, which also extension
// and prevents naming conflicts between other props and methods
