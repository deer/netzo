import { assertEquals, assertExists } from "../deps.ts";
import { clickup } from "./mod.ts";

Deno.test("clickup", async (t) => {
  const { api } = clickup({
    personalApiKey: Deno.env.get("CLICKUP_PERSONAL_API_KEY"),
  });

  await t.step("find lists", async () => {
    const result = await api.folder["FOLDER_ID"].list.get();
    assertExists(result.lists);
    assertEquals(Array.isArray(result.lists), true);
  });

  await t.step("get list", async () => {
    const data = await api.list["LIST_ID"].get();
    assertExists(data);
    assertEquals(typeof data, "object");
  });

  await t.step("find tasks", async () => {
    const result = await api.list["LIST_ID"].task.get();
    assertExists(result.tasks);
    assertEquals(Array.isArray(result.tasks), true);
  });
});