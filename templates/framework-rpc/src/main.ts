import { App } from 'https://deno.land/x/rpc@0.2.2/app.ts'

const app = new App()

app.method<[string]>('hello', (params) => {
  return `Hello ${params[0]}`
})

app.listen({ port: 8080, hostname: '0.0.0.0' })
