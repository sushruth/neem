import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import * as serviceWorker from "./mod.ts";

Deno.test("service-worker name", () => {
	assertEquals(serviceWorker.name, "@neem/service-worker");
});
