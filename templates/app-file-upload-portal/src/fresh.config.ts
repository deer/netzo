import { defineConfig } from "$fresh/server.ts";
import { daisyui } from "netzo/ui/plugins/mod.ts";

export default defineConfig({
  plugins: [
    daisyui(),
  ],
});
