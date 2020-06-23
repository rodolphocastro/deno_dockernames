import { generateName, generateNameCustom } from "./mod.ts";

const errorMessage =
  "Wrong usage! If you need help use the h, -h or --help command";
const supportedCommands = ["g", "-g", "--generate", "h", "-h", "--help"];
const helpMessage =
  `Supported commands are: [${supportedCommands.join(" ")}]\n` +
  "For generation the syntax is {retry or separator} {retry?}";

/**
 * Handles command execution
 * @param command Command to be ran (check supported Commands)
 * @param firstArgs First argument, might be a separator or a retry number
 * @param secondArgs Second argument, should be a retry number or undefined
 */
function handleCommand(
  command: string,
  firstArgs: string | number,
  secondArgs?: number,
) {
  let result = "";
  switch (command) {
    case "g":
    case "-g":
    case "--generate":
      if (typeof firstArgs === "number") {
        result = generateName(firstArgs);
      } else {
        if (secondArgs && secondArgs != NaN) {
          result = generateNameCustom(firstArgs, secondArgs);
        } else {
          result = generateNameCustom(firstArgs);
        }
      }
      break;
    case "h":
    case "-h":
    case "--help":
    default:
      result = helpMessage;
      break;
  }
  console.log(result);
}

const [command, firstArgs, secondArgs] = Deno.args;
if (supportedCommands.includes(command)) {
  handleCommand(
    command,
    firstArgs,
    secondArgs ? parseInt(secondArgs) : undefined,
  );
} else {
  console.error(errorMessage);
}
