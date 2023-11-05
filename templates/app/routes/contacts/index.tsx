import { defineRoute } from "$fresh/server.ts";
import { getOptions } from "@/components/tables/contacts/data/options.tsx";
import { Table } from "@/islands/Contacts.tsx";
import { Contact } from "@/components/tables/contacts/data/schema.ts";
import { db } from "@/db.ts";

export default defineRoute(async (req, ctx) => {
  const data = await db.find<Contact>("contacts");

  if (!data) return ctx.renderNotFound();

  const options = getOptions(data);

  return <Table data={data} options={options} />;
});
