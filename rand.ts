/**
 * Picks a random integer between 0 and a maximum value.
 * @param max The maximum value, defaults to 1
 */
function pickRandomInteger(max: number = 1): number {
  if (max < 0) {
    throw new Error("The maximum value must be greater than or equal to 0");
  }

  return Math.floor(Math.random() * max);
}

/**
 * Picks a random object from an array
 * @param arr The array from which the element will be picked
 */
function pickRandomElement<T>(arr: Array<T>): T {
  const { length } = arr;
  if (!length) {
    throw new Error("The array mustn't be empty");
  }
  return arr[pickRandomInteger(length)];
}

export { pickRandomInteger, pickRandomElement };
