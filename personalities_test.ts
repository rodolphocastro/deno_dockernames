import {
  assert,
} from "https://deno.land/std/testing/asserts.ts";
import { personalities, pickPersonality } from "./personalities.ts";

Deno.test("personalities: No duplicates", () => {
  const subject = personalities;
  const set = new Set(personalities);
  assert(() => set.size === subject.length);
});

Deno.test("pickPersonality: Picks a random personality", () => {
  const subject = pickPersonality();
  assert(() =>
    subject != null &&
    subject != "" &&
    personalities.indexOf(subject) >= 0
  );
});
