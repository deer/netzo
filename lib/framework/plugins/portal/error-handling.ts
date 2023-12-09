import type { PluginMiddleware } from "netzo/deps/$fresh/src/server/types.ts";
import { errors } from "netzo/deps/std/http/http_errors.ts";
import { redirect } from "netzo/framework/plugins/portal/utils/http.ts";
import type { NetzoState } from "netzo/framework/mod.ts";

export const errorHandlingMiddlewares: PluginMiddleware<NetzoState>[] = [
  {
    path: "/",
    middleware: {
      async handler(_req, ctx) {
        try {
          return await ctx.next();
        } catch (error) {
          if (error instanceof errors.Unauthorized) {
            return redirect("/oauth/signin");
          }
          throw error;
        }
      },
    },
  },
];
