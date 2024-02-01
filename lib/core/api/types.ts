// lik @unjs/unstorage but for services instead of storage
export * from "./utils.ts";
import type { ULID } from "../../deps/ulid.ts";

export type Id = string | number | ULID;

export type ServiceOptions = {
  /* Name of the field to use as the ID for the items (defaults to "id"). */
  idField?: string;
};

export type Service<TData = unknown> = {
  adapter?: "denokv" | "http"; // undefined means custom service
  options?: Record<string, unknown>;
  find?: <T = TData>(query?: Record<string | number, unknown>) => Promise<T[]>;
  get?: <T = TData>(id: Id) => Promise<T | undefined>;
  create?: <T = TData>(data: T) => Promise<T>;
  update?: <T = TData>(id: Id, data: T) => Promise<T>;
  patch?: <T = TData>(id: Id, data: Partial<T>) => Promise<T>;
  remove?: <T = TData>(id: Id) => Promise<{ ok: boolean }>;
};

type ServiceFactory<T> = (opts: T) => Service;

export function defineService<T = any>(
  factory: ServiceFactory<T>,
): ServiceFactory<T> {
  return factory;
}
