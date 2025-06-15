import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import * as server from "./mod.ts";

Deno.test("server name", () => {
	assertEquals(server.name, "@neem/server");
});
