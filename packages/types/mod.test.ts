import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import * as types from "./mod.ts";

Deno.test("types name", () => {
  assertEquals(types.name, "@neem/types");
});
