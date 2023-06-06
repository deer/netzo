import { assertExists } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import * as apis from "./mod.ts";

Deno.test("apis", async (t) => {
  await t.step("declarations", () => {
    assertExists(apis.activecampaign);
    assertExists(apis.clarifai);
    assertExists(apis.cloudflare);
    assertExists(apis.discord);
    assertExists(apis.ergastf1);
    assertExists(apis.facturama);
    assertExists(apis.fathomanalytics);
    assertExists(apis.faunadb);
    assertExists(apis.github);
    assertExists(apis.googleappsheet);
    assertExists(apis.googlesheets);
    assertExists(apis.jsonplaceholder);
    assertExists(apis.monday);
    assertExists(apis.mongodbatlasdata);
    assertExists(apis.netzo);
    assertExists(apis.openai);
    assertExists(apis.pandadoc);
    assertExists(apis.plain);
    assertExists(apis.purpleair);
    assertExists(apis.restdb);
    assertExists(apis.sendgrid);
    assertExists(apis.brevo);
    assertExists(apis.spacexland);
    assertExists(apis.whatsappbusiness);
  });
});
