import { generateName, generateNameCustom } from "./mod.ts";

const genCommands = ["g", "-g", "--generate"];
const helpMessage = `Supported commands are: [${genCommands.join(", ")}]
    The syntax for generating is {retry? or separator?} {retry?} 
    [? means optional parameter]
    ------
    The following are valid examples:
    deno run .\\cli.ts
    deno run .\\cli.ts g
    deno run .\\cli.ts g "@"
    deno run .\\cli.ts g 10
    deno run .\\cli.ts g "@" 20
    `;

class CommandBuilder {
  private baseCommand: string;
  private retry?: number;
  private separator?: string;

  private constructor(base: string) {
    this.baseCommand = base;
  }

  public static CreateCommand(base: string): CommandBuilder {
    return new CommandBuilder(base);
  }

  public AddRetry(retry: number): CommandBuilder {
    this.retry = retry;
    return this;
  }

  public AddSeparator(separator: string): CommandBuilder {
    this.separator = separator;
    return this;
  }

  public BuildAndRun(): string {
    // TODO: Further refactor this ugly bit of code
    if (genCommands.includes(this.baseCommand)) {
      if (this.retry && this.separator) {
        return generateNameCustom(this.separator, this.retry);
      } else if (this.separator) {
        return generateNameCustom(this.separator);
      } else if (this.retry) {
        return generateName(this.retry);
      } else {
        return generateName();
      }
    }

    return helpMessage;
  }
}

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
  const builder = CommandBuilder.CreateCommand(command);

  typeof firstArgs === "number"
    ? builder.AddRetry(firstArgs)
    : builder.AddSeparator(firstArgs);

  if (typeof secondArgs !== "undefined") {
    builder.AddRetry(secondArgs);
  }

  return builder.BuildAndRun();
}

const [command = "g", firstArgs, secondArgs] = Deno.args;
console.log(handleCommand(
  command,
  firstArgs,
  secondArgs ? parseInt(secondArgs) : undefined,
));
