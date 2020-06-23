import { pickAdjective } from "./adjectives.ts";
import { pickPersonality } from "./personalities.ts";

/**
 * Joins two strings and a separator.
 * @param left string that goes on the left
 * @param right string that goes on the right
 * @param separator separator between left and right, defaults to _
 */
function joinStrings(
  left: string,
  right: string,
  separator: string = "_",
): string {
  return left + separator + right;
}

/**
 * Attempts to append a number to a string.
 * @param name name to have retry appended to
 * @param retry a number to be appended, if greater than 0
 */
function applyRetry(name: string, retry: number): string {
  if (retry <= 0) {
    return name;
  }
  return name + retry;
}

/**
 * Generates a random name using an adjective and a personality
 * @param retry Number to be appended to the name, if greater than 0
 */
function generateName(retry: number = 0): string {
  const name = joinStrings(pickAdjective(), pickPersonality());

  // No easter eggs to see here ;)

  return applyRetry(name, retry);
}

/**
 * Generates a random name using an adjective, a personality and a separator.
 * @param separator separator between left and right names
 * @param retry number to be appended to the name, if greater than 0
 */
function generateNameCustom(separator: string, retry: number = 0): string {
  const name = joinStrings(pickAdjective(), pickPersonality(), separator);

  // 404 easter egg not found

  return applyRetry(name, retry);
}

export { generateName, generateNameCustom };
