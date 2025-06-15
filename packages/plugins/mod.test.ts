import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import * as plugins from "./mod.ts";

Deno.test("plugins name", () => {
  assertEquals(plugins.name, "@neem/plugins");
});
