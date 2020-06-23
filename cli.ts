import { generateName, generateNameCustom } from "./mod.ts";

const genCommands = ["g", "-g", "--generate"];
const helpMessage = `
  Supported commands are: [${genCommands.join(", ")}]
  The syntax for generating is {separator?} {retry?} 
  [? means optional parameter]
  ------
  The following are valid examples:
    deno run .\\cli.ts ... results in something_somegion
    deno run .\\cli.ts g "@" ... results in something@someone
    deno run .\\cli.ts g 10 ... results in something_someone10
    deno run .\\cli.ts g 20 "@" ... results in something@someone20`;

/**
 * Describes a rule for running the name generation via CLI.
 */
interface GenerationStrategy {
  retry: boolean;
  separator: boolean;
  strategy: (retryAmount?: number, separatorString?: string) => string;
}

/**
 * Builder for Commands.
 */
class CommandBuilder {
  private generationDecisionMatrix: GenerationStrategy[] = [
    {
      retry: true,
      separator: true,
      strategy: (retry, separator) =>
        generateNameCustom(separator as string, retry),
    },
    {
      retry: true,
      separator: false,
      strategy: (retry, _separator) => generateName(retry),
    },
    {
      retry: false,
      separator: true,
      strategy: (_retry, separator) => generateNameCustom(separator as string),
    },
    {
      retry: false,
      separator: false,
      strategy: (_retry, _separator) => generateName(),
    },
  ];
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
    if (isNaN(retry)) {
      return this;
    }
    this.retry = retry;
    return this;
  }

  public AddSeparator(separator: string): CommandBuilder {
    this.separator = separator;
    return this;
  }

  public BuildAndRun(): string {
    if (genCommands.includes(this.baseCommand)) {
      return this.generationDecisionMatrix
        .filter((p) =>
          p.retry === (typeof this.retry !== "undefined") &&
          p.separator === (typeof this.separator !== "undefined")
        )[0]?.strategy(this.retry as number, this.separator as string);
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
  firstArgs?: string,
  secondArgs?: string,
) {
  const builder = CommandBuilder.CreateCommand(command);

  if (typeof firstArgs !== "undefined") {
    isNaN(parseInt(firstArgs))
      ? builder.AddSeparator(firstArgs)
      : builder.AddRetry(parseInt(firstArgs));
  }

  if (typeof secondArgs !== "undefined") {
    builder.AddSeparator(secondArgs);
  }

  return builder.BuildAndRun();
}

const [command = "g", retry, separator] = Deno.args;
console.log(handleCommand(
  command,
  retry,
  separator,
));
