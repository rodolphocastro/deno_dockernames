import {
  assert,
} from "https://deno.land/std/testing/asserts.ts";
import { adjectives, pickAdjective } from "./adjectives.ts";

Deno.test("adjectives: No duplicates", () => {
  const subject = adjectives;
  const set = new Set(adjectives);
  assert(() => set.size === subject.length);
});

Deno.test("pickAdjective: Picks a random adjective", () => {
  const subject = pickAdjective();
  assert(() =>
    subject != null &&
    subject != "" &&
    adjectives.indexOf(subject) >= 0
  );
});
