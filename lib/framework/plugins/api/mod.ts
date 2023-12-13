import type { Plugin } from "../../../deps/$fresh/server.ts";
import { isHttpError } from "../../../deps/std/http/http_errors.ts";
import type { Project } from "../../../framework/mod.ts";
import { parseRequestBody } from "../../../framework/utils/mod.ts";
import { createDatabase } from "../../../core/database.ts";

export type ApiOptions = Project["config"]["api"];

// deno-lint-ignore ban-types
export type ApiState = {};

const path = Deno.env.get("DENO_KV_PATH");

const kv = await Deno.openKv(path);
const db = createDatabase(kv);

const METHODS = [
  "find",
  "get",
  "create",
  "update",
  "patch",
  "remove",
] as ApiOptions["methods"];
const ERRORS = {
  notAllowed: () => new Response("Method not allowed", { status: 405 }),
};

/**
 * A fresh plugin that registers middleware and handlers to
 * to mount RESTful API routes on the `/api` route path.
 *
 * A fresh plugin that creates handlers for the following routes:
 * - `GET /api/[resource]` find all records of a resource
 * - `GET /api/[resource]/[id]` get a record of a resource by id
 * - `POST /api/[resource]` create a new record of a resource (auto-generates id)
 * - `PUT /api/[resource]/[id]` update a record of a resource by id
 * - `PATCH /api/[resource]/[id]` patch a record of a resource by id
 * - `DELETE /api/[resource]/[id]` remove a record of a resource by id
 */
export const api = (options?: ApiOptions): Plugin => {
  const { path = "/api", idField = "id", methods = METHODS } = options ?? {};
  return {
    name: "api",
    middlewares: [
      {
        path,
        middleware: {
          handler: async (_req, ctx) => {
            try {
              if (!["route"].includes(ctx.destination)) return await ctx.next();
              return await ctx.next();
            } catch (error) {
              return toErrorResponse(error);
            }
          },
        },
      },
    ],
    routes: [
      {
        path: `${path}/[resource]`,
        handler: {
          async GET(_req, ctx) {
            if (!methods!.includes("find")) return ERRORS.notAllowed();
            const { resource } = ctx.params;
            const result = await db.find(resource, {});
            return Response.json(result);
          },
          async POST(req, ctx) {
            if (!methods!.includes("create")) return ERRORS.notAllowed();
            const { resource } = ctx.params;
            const data = await parseRequestBody(req);
            const result = await db.create(resource, data, idField);
            return Response.json(result);
          },
        },
      },
      {
        path: `${path}/[resource]/[id]`,
        handler: {
          async GET(_req, ctx) {
            if (!methods!.includes("get")) return ERRORS.notAllowed();
            const { resource, id } = ctx.params;
            const result = await db.get(resource, id);
            return Response.json(result);
          },
          async PUT(req, ctx) {
            if (!methods!.includes("update")) return ERRORS.notAllowed();
            const { resource, id } = ctx.params;
            const data = await parseRequestBody(req);
            const result = await db.update(resource, id, data);
            return Response.json(result);
          },
          async PATCH(req, ctx) {
            if (!methods!.includes("patch")) return ERRORS.notAllowed();
            const { resource, id } = ctx.params;
            const data = await parseRequestBody(req);
            const result = await db.patch(resource, id, data);
            return Response.json(result);
          },
          async DELETE(_req, ctx) {
            if (!methods!.includes("remove")) return ERRORS.notAllowed();
            const { resource, id } = ctx.params;
            await db.remove(resource, id);
            return Response.json({ id });
          },
        },
      },
    ],
  };
};

/**
 * Returns the converted HTTP error response from the given error. If the error
 * is an instance of {@linkcode Deno.errors.NotFound}, a HTTP 404 Not Found
 * error response is returned. This is done to translate errors thrown from
 * logic that's separated by concerns.
 *
 * If the error is a HTTP-flavored error, the corresponding HTTP error response
 * is returned.
 *
 * If the error is a generic error, a HTTP 500 Internal Server error response
 * is returned.
 *
 * @see {@link https://deno.land/std/http/http_errors.ts}
 *
 * @example
 * ```ts
 * import { toErrorResponse } from "@/plugins/error_handling.ts";
 * import { errors } from "../../../deps/std/http/http_errors.ts";
 *
 * const resp = toErrorResponse(new errors.NotFound("User not found"));
 * resp.status; // Returns 404
 * await resp.text(); // Returns "User not found"
 * ```
 */
// deno-lint-ignore no-explicit-any
export function toErrorResponse(error: any) {
  if (error instanceof Deno.errors.NotFound) {
    return new Response(error.message, { status: 404 });
  }
  return isHttpError(error)
    ? new Response(error.message, {
      status: error.status,
      headers: error.headers,
    })
    : new Response(error.message, { status: 500 });
}