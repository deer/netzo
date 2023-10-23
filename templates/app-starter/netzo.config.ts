import "std/dotenv/load.ts";
import { defineNetzoConfig } from "netzo/config.ts";
import { createGitHubOAuthConfig } from "deno_kv_oauth/mod.ts";
import { authenticationPlugin } from "../../lib/authentication/plugin.ts";
import errorPages from "netzo/plugins/errorPages/mod.ts";
import twindPlugin from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";

export default defineNetzoConfig({
  project: "sheer-marlin-436696",
  visibility: { level: "public" },
  plugins: [
    errorPages(),
    authenticationPlugin({ oauth2: createGitHubOAuthConfig() }),
    twindPlugin(twindConfig),
  ],
});