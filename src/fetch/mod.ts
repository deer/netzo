import { $fetch, FetchOptions } from "https://esm.sh/ohmyfetch@0.4.18";
import { QueryObject, resolveURL, withQuery } from "https://esm.sh/ufo@0.8.5";
import type {
  ClientBuilder,
  ClientMethodHandler,
  ResponseType,
} from "./types.ts";
import { headersToObject } from "./utils.ts";

const payloadMethods: ReadonlyArray<string> = [
  "POST",
  "PUT",
  "DELETE",
  "PATCH",
];

/**
 * Minimal, type-safe REST client using JS proxies
 */
export function createFetch<R extends ResponseType = "json">(
  defaultOptions: Omit<FetchOptions<R>, "method"> = {},
): ClientBuilder {
  // Callable internal target required to use `apply` on it
  const internalTarget = (() => {}) as ClientBuilder;

  function p(url: string): ClientBuilder {
    return new Proxy(internalTarget, {
      get(_target, key: string) {
        const method = String(key).toUpperCase();

        if (!["GET", ...payloadMethods].includes(method)) {
          return p(resolveURL(url, key));
        }

        const handler: ClientMethodHandler = <
          T = unknown,
          R extends ResponseType = "json",
        >(
          data?: RequestInit["body"] | Record<string, unknown>,
          opts: FetchOptions<R> = {},
        ) => {
          if (method === "GET") {
            if (data) url = withQuery(url, data as QueryObject);
            // GET disallows body so remove it
            defaultOptions.body = opts.body = undefined;
          } else if (payloadMethods.includes(method)) {
            opts.body = data;
          }

          opts.method = method;

          return $fetch<T, R>(
            url,
            {
              ...defaultOptions,
              ...opts,
              headers: {
                ...headersToObject(defaultOptions.headers || {}),
                ...headersToObject(opts.headers || {}),
              },
            } as FetchOptions<R>,
          );
        };

        return handler;
      },
      apply(_target, _thisArg, args: (string | number)[] = []) {
        return p(resolveURL(url, ...args.map((i) => `${i}`)));
      },
    });
  }

  return p(defaultOptions.baseURL || "/");
}