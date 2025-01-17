import "../../deps/std/dotenv/load.ts";
import {
  assert,
  assertEquals,
  assertStringIncludes,
} from "../../deps/std/assert/mod.ts";
import { output, test } from "./utils.ts";

test({ args: [] }, async (proc) => {
  const [stdout, stderr, { code }] = await output(proc);
  assertStringIncludes(stderr, "SUBCOMMANDS:");
  assertStringIncludes(stderr, "init ");
  assertStringIncludes(stderr, "deploy ");
  assertStringIncludes(stderr, "upgrade ");
  assertEquals(code, 1);
  assertEquals(stdout, "");
});

test({ args: ["-V"] }, async (proc) => {
  const [stdout, stderr, { code }] = await output(proc);
  assertEquals(stderr, "");
  assertEquals(code, 0);
  assert(stdout.startsWith("netzo "));
});

test({ args: ["--version"] }, async (proc) => {
  const [stdout, stderr, { code }] = await output(proc);
  assertEquals(stderr, "");
  assertEquals(code, 0);
  assert(stdout.startsWith("netzo "));
});

test({ args: ["-h"] }, async (proc) => {
  const [stdout, stderr, { code }] = await output(proc);
  assertStringIncludes(stdout, "SUBCOMMANDS:");
  assertStringIncludes(stdout, "init ");
  assertStringIncludes(stdout, "deploy ");
  assertStringIncludes(stdout, "upgrade ");
  assertEquals(code, 0);
  assertEquals(stderr, "");
});

test({ args: ["init", "-h"] }, async (proc) => {
  const [stdout, stderr, { code }] = await output(proc);
  assertStringIncludes(stdout, "USAGE:");
  assertStringIncludes(stdout, "netzo init");
  assertEquals(code, 0);
  assertEquals(stderr, "");
});

test({ args: ["deploy", "-h"] }, async (proc) => {
  const [stdout, stderr, { code }] = await output(proc);
  assertStringIncludes(stdout, "USAGE:");
  assertStringIncludes(stdout, "netzo deploy");
  assertEquals(code, 0);
  assertEquals(stderr, "");
});

test({ args: ["upgrade", "-h"] }, async (proc) => {
  const [stdout, stderr, { code }] = await output(proc);
  assertStringIncludes(stdout, "netzo upgrade");
  assertStringIncludes(stdout, "USAGE:");
  assertStringIncludes(stdout, "ARGS:");
  assertEquals(code, 0);
  assertEquals(stderr, "");
});
