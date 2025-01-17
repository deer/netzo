import "../../../deps/std/dotenv/load.ts";
import { assertEquals, assertExists } from "../../../deps/std/assert/mod.ts";
import { cloudflare } from "./mod.ts";

Deno.test("[apis] cloudfare", async (t) => {
  const api = cloudflare({
    apiKey: Deno.env.get("CLOUDFLARE_API_KEY")!,
  });

  await t.step("find organizations", async () => {
    const result = await api.user.organizations.get();
    assertExists(result.result);
    assertEquals(Array.isArray(result.result), true);
  });

  await t.step("find zones", async () => {
    const result = await api.zones.get();
    assertExists(result.result);
    assertEquals(Array.isArray(result.result), true);
  });
});
