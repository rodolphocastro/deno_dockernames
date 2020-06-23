import {
  assert,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import { pickRandomInteger, pickRandomElement } from "./rand.ts";

Deno.test("pickRandomInteger: Picks a integer i: (0 <= i <= 1) when nothing is set", () => {
  const result = pickRandomInteger();
  assert(() => {
    result >= 0 &&
      result <= 1;
  });
});

Deno.test("pickRandomInteger: Picks a integer i: (0 <= i <= max) when a max is set", () => {
  const max = 20;
  const result = pickRandomInteger(max);
  assert(() => {
    result >= 0 &&
      result <= max;
  });
});

Deno.test("pickRandomInteger: Throws when max is less than 0", () => {
  const max = -20;
  assertThrows(() => pickRandomInteger(max));
});

Deno.test("pickRandomElement: Picks a random element from an array", () => {
  const subject = ["a", "b", "c", "d"];
  const result = pickRandomElement(subject);
  assert(() => {
    result != null &&
      result != "" &&
      subject.indexOf(result) >= 0;
  });
});

Deno.test("pickRandomElement: Throws when array is empty", () => {
  const subject: Array<number> = [];
  assertThrows(() => pickRandomElement(subject));
});
