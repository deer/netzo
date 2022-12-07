import { ClientBuilder } from "../client/types.ts";
import { InvokeFn, IRequest, RequestClient } from "./types.ts";
import replace from "https://esm.sh/object-replace-mustache@1.0.2";
import { render } from "https://deno.land/x/mustache_ts@v0.4.1.1/mustache.ts";
import { deepMerge } from "https://deno.land/std@0.157.0/collections/deep_merge.ts";
import { $fetch } from "https://esm.sh/v99/ofetch@1.0.0/dist/index";
import { resolveURL } from "../utils/mod.ts";
import { auth } from "../utils/auth/mod.ts";

export const createRequest = (_api: ClientBuilder) => {
  return (request: IRequest): RequestClient => {
    const invoke: InvokeFn = async (data, options = {}) => {
      // [variables] adds support for templated options via {{•}} syntax
      const { method = "GET", body, variables = {}, ...rest } = deepMerge(
        request,
        options,
      ) as IRequest;
      let { baseURL, url, authorization, query, headers } = replace(
        rest,
        variables,
      );

      // [url] render templated string e.g. 'https://...{{•}}...' preserving baseURL pathname
      const { href } = baseURL
        ? resolveURL(render(url!, variables), render(baseURL, variables))
        : resolveURL(render(url!, variables));

      // [method] ensure validity of HTTP method
      if (method === "GET") query = data as Record<string, string>;

      const response = await $fetch.raw(href, {
        method,
        query,
        headers: { ...headers, Date: (new Date()).toUTCString() },
        body: ["GET", "HEAD"].includes(method) ? undefined : body,
        async onRequest(ctx) {
          // [authorization] inject handlers for base.authorization in hooks
          await auth(authorization, ctx);
        },
        // async onRequestError(ctx) {},
        // async onResponse(ctx) {},
        // async onResponseError(ctx) {},
      });
      return response._data;
    };

    return { ...request, invoke };
  };
};
