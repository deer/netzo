import { GraphQLHTTP } from 'https://deno.land/x/gql@1.2.3/mod.ts'
import { makeExecutableSchema } from 'https://esm.sh/@graphql-tools/schema@9.0.17?target=deno'
import { gql } from 'https://deno.land/x/graphql_tag@0.1.1/mod.ts'

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => `Hello World!`,
  },
}

const schema = makeExecutableSchema({ resolvers, typeDefs })

Deno.serve(async (req) => {
  const { pathname } = new URL(req.url)
  return pathname === '/graphql'
    ? await GraphQLHTTP<Request>({ schema, graphiql: true })(req)
    : new Response('Not Found', { status: 404 })
})
