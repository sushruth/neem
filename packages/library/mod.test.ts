import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import * as library from "./mod.ts";

Deno.test("library name", () => {
	assertEquals(library.name, "@neem/library");
});
