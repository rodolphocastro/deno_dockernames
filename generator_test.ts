import {
  assert,
} from "https://deno.land/std/testing/asserts.ts";
import { adjectives } from "./adjectives.ts";
import { personalities } from "./personalities.ts";
import { generateName, generateNameCustom } from "./generator.ts";

Deno.test("generateName: Generates a name with an adjective and a personality", () => {
  const subject = generateName();
  assert(() => {
    subject != null &&
      subject != "" &&
      subject.includes("_");
  });

  const [left, right, ...rest] = subject.split("_");
  assert(() => {
    adjectives.includes(left) &&
      personalities.includes(right) &&
      rest === null;
  });
});

Deno.test("generateName: Generates a name with an adjective, a personality and appends retry when retry > 0", () => {
  const retry = 20;
  const subject = generateName(retry);
  assert(() => {
    subject != null &&
      subject != "" &&
      subject.includes("_") &&
      subject.includes(retry.toString());
  });
  const [left, right, ...rest] = subject.split("_");
  assert(() => {
    adjectives.includes(left) &&
      personalities.includes(right) &&
      rest === null;
  });
});

Deno.test("generateNameCustom: Generates a name with an adjective, a personality and a custom separator", () => {
  const separator = "-";
  const subject = generateNameCustom(separator);
  assert(() => {
    subject != null &&
      subject != "" &&
      subject.includes(separator);
  });

  const [left, right, ...rest] = subject.split(separator);
  assert(() => {
    adjectives.includes(left) &&
      personalities.includes(right) &&
      rest === null;
  });
});

Deno.test("generateNameCustom: Generates a name with an adjective, a personality and appends retry when retry > 0", () => {
  const separator = "-";
  const retry = 20;
  const subject = generateNameCustom(separator, retry);
  assert(() => {
    subject != null &&
      subject != "" &&
      subject.includes(separator) &&
      subject.includes(retry.toString());
  });
  const [left, right, ...rest] = subject.split(separator);
  assert(() => {
    adjectives.includes(left) &&
      personalities.includes(right) &&
      rest === null;
  });
});
