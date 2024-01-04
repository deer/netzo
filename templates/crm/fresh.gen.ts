// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_ui_layout from "./routes/(ui)/_layout.tsx";
import * as $_ui_accounts_id_ from "./routes/(ui)/accounts/[id].tsx";
import * as $_ui_accounts_index from "./routes/(ui)/accounts/index.tsx";
import * as $_ui_contacts_id_ from "./routes/(ui)/contacts/[id].tsx";
import * as $_ui_contacts_index from "./routes/(ui)/contacts/index.tsx";
import * as $_ui_deals_id_ from "./routes/(ui)/deals/[id].tsx";
import * as $_ui_deals_index from "./routes/(ui)/deals/index.tsx";
import * as $_ui_index from "./routes/(ui)/index.tsx";
import * as $_ui_invoices_id_ from "./routes/(ui)/invoices/[id].tsx";
import * as $_ui_invoices_index from "./routes/(ui)/invoices/index.tsx";
import * as $Overview from "./islands/Overview.tsx";
import * as $accounts_Form from "./islands/accounts/Form.tsx";
import * as $accounts_Table from "./islands/accounts/Table.tsx";
import * as $contacts_Form from "./islands/contacts/Form.tsx";
import * as $contacts_Table from "./islands/contacts/Table.tsx";
import * as $deals_Kanban from "./islands/deals/Kanban.tsx";
import * as $invoices_Form from "./islands/invoices/Form.tsx";
import * as $invoices_Table from "./islands/invoices/Table.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(ui)/_layout.tsx": $_ui_layout,
    "./routes/(ui)/accounts/[id].tsx": $_ui_accounts_id_,
    "./routes/(ui)/accounts/index.tsx": $_ui_accounts_index,
    "./routes/(ui)/contacts/[id].tsx": $_ui_contacts_id_,
    "./routes/(ui)/contacts/index.tsx": $_ui_contacts_index,
    "./routes/(ui)/deals/[id].tsx": $_ui_deals_id_,
    "./routes/(ui)/deals/index.tsx": $_ui_deals_index,
    "./routes/(ui)/index.tsx": $_ui_index,
    "./routes/(ui)/invoices/[id].tsx": $_ui_invoices_id_,
    "./routes/(ui)/invoices/index.tsx": $_ui_invoices_index,
  },
  islands: {
    "./islands/Overview.tsx": $Overview,
    "./islands/accounts/Form.tsx": $accounts_Form,
    "./islands/accounts/Table.tsx": $accounts_Table,
    "./islands/contacts/Form.tsx": $contacts_Form,
    "./islands/contacts/Table.tsx": $contacts_Table,
    "./islands/deals/Kanban.tsx": $deals_Kanban,
    "./islands/invoices/Form.tsx": $invoices_Form,
    "./islands/invoices/Table.tsx": $invoices_Table,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
