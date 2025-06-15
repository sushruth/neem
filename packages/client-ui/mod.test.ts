import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import * as clientUi from "./mod.ts";

Deno.test("client-ui name", () => {
  assertEquals(clientUi.name, "@neem/client-ui");
});
