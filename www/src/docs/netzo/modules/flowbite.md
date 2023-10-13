<img src="https://raw.githubusercontent.com/netzo/netzo/main/assets/modules/flowbite.svg" alt="netzo/modules/flowbite" class="mb-5 w-75px">

# `flowbite`

[Flowbite](https://flowbite.com) is an open-source library of over 600+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.

- **labels:** `css`, `components`, `tailwindcss`

## Usage

Register the module in `netzo.config.ts` and ensure `main.ts` and `dev.ts` are receive the `config` object as shown below.

::: code-group
```ts [netzo.config.ts]
import { defineNetzoConfig } from 'netzo/config.ts'

export default defineNetzoConfig({
  modules: {
    flowbite: {}
  }
})
```
<<< src/main.ts
<<< src/dev.ts
:::

::: warning Fresh configuration [must](https://fresh.deno.dev/docs/concepts/ahead-of-time-builds#migrating-existing-projects-with-plugins) be defined in `netzo.config.ts`.
:::

## Configuration

```ts
import type { NetzoModule } from 'netzo/config.ts'

interface FlowbiteOptions extends NetzoModule {
  additionalStylesheets?: string[]
  additionalScripts?: string[]
  plugins?: {
    datepicker?: boolean
  }
}
```

## References

- [Flowbite](https://flowbite.com/)