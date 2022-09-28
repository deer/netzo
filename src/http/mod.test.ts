// TODO: implement tests from https://github.com/johannschopplich/uncreate/blob/main/test/index.test.ts
import { assertEquals, assertExists } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { http } from "./mod.ts";

const client = http({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
})

Deno.test("client", () => {
  assertExists(client)
})

Deno.test("client.todos", () => {
  assertExists(client.todos)
})

Deno.test("client.todos.get()", async () => {
  const todos = await client.todos.get()
  assertEquals(todos?.length, 200)
})

Deno.test("client.todos[1].get()", async () => {
  const todo = await client.todos[1].get()
  assertEquals(todo?.id, 1)
})

Deno.test("client.todos.post()", async () => {
  const todo = await client.todos.post({ userId: 1, title: "lorem ipsum", completed: true })
  assertExists(todo)
})

Deno.test("client.todos[1].put()", async () => {
  const todo = await client.todos[1].put({ userId: 1, id: 1, title: "lorem ipsum", completed: true })
  assertExists(todo)
})

Deno.test("client.todos[1].patch()", async () => {
  const todo = await client.todos[1].patch({ completed: true })
  assertExists(todo)
})

Deno.test("client.todos[1].delete()", async () => {
  const todo = await client.todos[1].delete()
  assertExists(todo)
})