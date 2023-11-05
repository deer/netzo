import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.205.0/testing/asserts.ts";
import { sendgrid } from "./mod.ts";

Deno.test("[apis] sendgrid", async (t) => {
  const { api } = sendgrid({
    apiKey: Deno.env.get("SENDGRID_API_KEY"),
  });

  await t.step("find lists", async () => {
    const result = await api.marketing.lists.get();
    assertExists(result.result);
    assertEquals(Array.isArray(result.result), true);
  });

  await t.step("get list", async () => {
    const resultData = await api.marketing.lists["LIST_ID"].get();
    assertExists(resultData);
    assertEquals(typeof resultData, "object");
  });
});
