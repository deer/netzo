/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import '$std/dotenv/load.ts'

import { start } from '$fresh/server.ts'
import manifest from './fresh.gen.ts'

import daisyui from '../../../lib/plugins/daisyui/mod.ts'

await start(manifest, {
  plugins: [
    daisyui(),
  ],
})
