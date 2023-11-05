import { defineNetzoConfig } from "netzo/config/mod.ts";
import { auth } from "netzo/plugins/auth/mod.ts";
import { createGitHubOAuthConfig } from "deno_kv_oauth/mod.ts";
import { appLayout } from "netzo/plugins/appLayout/mod.ts";
import { errorPages } from "netzo/plugins/errorPages/mod.ts";
import twindPlugin from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";

export default defineNetzoConfig({
  project: "sheer-marlin-436696",
  plugins: [
    ...auth({
      oauth2: createGitHubOAuthConfig(),
    }),
    appLayout({
      title: "Administration panel",
      description: "Administration ",
      favicon: "",
      image: {
        src: "",
        // class: "dark:filter-invert",
      },
    }),
    errorPages(),
    twindPlugin(twindConfig),
  ],
});
