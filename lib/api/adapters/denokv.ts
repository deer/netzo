import { defineService, type ServiceOptions } from "../types.ts";
import { ERRORS, ulid } from "../utils.ts";
import { filterObjectsByKeyValues } from "../utils.ts";

export type DenoKvServiceOptions = ServiceOptions & {
  /* The Deno KV store to use. */
  kv: Deno.Kv;
  /* The KV prefix location of the service e.g. ["users"] */
  prefix?: Deno.KvKey;
};

/**
 * Creates a Service instance to perform RESTful operations on a Deno KV resource
 * @param options {DenoKvServiceOptions} - service options object
 * @returns a Service instance with methods for performing RESTful operations on the KV resource
 */
export const DenoKvService = defineService<DenoKvServiceOptions>(
  (options) => {
    const { kv = options.kv, prefix, idField = "id" } = options;

    if (!kv) throw new Error(ERRORS.missingProperty("kv"));
    if (!prefix) throw new Error(ERRORS.missingProperty("prefix"));
    if (!(kv instanceof Deno.Kv)) throw new Error(ERRORS.invalidProperty("kv"));
    if (!Array.isArray(prefix)) {
      throw new Error(ERRORS.invalidProperty("prefix"));
    }

    return {
      name: "kv",
      options: {
        kv,
        prefix,
        idField,
      },
      find: async (query) => {
        const data = (await Array.fromAsync(
          kv.list<T>({ prefix }),
        )).map((res) => res.value) as T[];
        return query ? filterObjectsByKeyValues<T>(data, query) : data;
      },
      get: async (id: Deno.KvKeyPart) => {
        const key = [...prefix, id];
        return (await kv.get<T>(key)).value;
      },
      create: async (data: T) => {
        const id = (data?.[idField] ?? ulid()) as Deno.KvKeyPart;
        const key = [...prefix, id];
        data = { [idField]: id, ...data };
        const ok = await kv.atomic().set(key, data).commit();
        if (!ok) throw new Error("Something went wrong.");
        return data;
      },
      update: async (id: Deno.KvKeyPart, data: T) => {
        const key = [...prefix, id];
        const entry = await kv.get<T>(key);
        if (!entry.value) {
          throw new Error(`Entry with key ${JSON.stringify(key)} not found.`);
        }
        const ok = await kv.atomic().check(entry).set(key, data).commit();
        if (!ok) throw new Error("Something went wrong.");
        return data;
      },
      patch: async (id: Deno.KvKeyPart, data: Partial<T>) => {
        const key = [...prefix, id];
        const entry = await kv.get<T>(key);
        if (!entry.value) {
          throw new Error(`Entry with key ${JSON.stringify(key)} not found.`);
        }
        data = { ...entry.value, ...data };
        const ok = await kv.atomic().check(entry).set(key, data).commit();
        if (!ok) throw new Error("Something went wrong.");
        return data;
      },
      remove: async (id: Deno.KvKeyPart) => {
        const key = [...prefix, id];
        await kv.delete(key);
        return { ok: true };
      },
    };
  },
);
