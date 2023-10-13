<script setup>
import SectionDocsCards from '@theme/components/sections/SectionDocsCards.vue'
import en from '~/locales/en.js'
import { ui } from '~/../lib/components/registry.ts'
import { buildDenoJson } from '~/src/utils.ts'
const item = en.components.find(({ uid }) => uid === 'popover')
const entry = ui.find(i => item.uid === i.name)
</script>

<div class="mb-5 w-75px h-75px"  :class="item.icon" />

# `popover`

{{ item.description }}

[`Radix UI`](https://www.radix-ui.com/primitives/docs/components/popover)
&nbsp;
[`API Reference`](https://www.radix-ui.com/primitives/docs/components/popover#api-reference)

## Installation

::: tabs
== Manual
Add required imports in `deno.json`
```json-vue
{{ buildDenoJson(entry) }}
```
== CLI (soon)
Run the following command in your terminal.
```sh
netzo add component popover
```
:::

## Usage

After [installation](#installation) components can be imported and used directly.

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'netzo/components/ui/popover.tsx'
```

## Examples

Working examples to copy-paste into projects under `components/ui/`.

### Default

::: code-group
<<< @/../../lib/components/example/popover.tsx
:::