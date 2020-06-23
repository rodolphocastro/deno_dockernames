# 🐋 Docker Names

_Docker_Names_ 🐋 is a port for [Moby's name generation](https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go) for the Deno ecosystem.

With this module you'll be able to generates names like:

+ ecstatic_rubin
+ elastic_yonath66
+ blissful@elgamal
+ boring&wozniak2

## 💭 Inspiration

This project is inspired by the awesome folks at [moby/moby](https://github.com/moby/moby) and their idea to pay homage to great scientists and "hackers" when creating names for running containers.

This also builds on my previous port for the .NET Core ecosystem [DockerNames](https://github.com/rodolphocastro/DockerNames).

## ▶ Quickstart

Import this module and you'll have access to two functions:

+ `generateName(retry?: int)`: Generates a name with an adjective, a personality and a `_` separator. If retry is set and greated than 0 it'll be appended
+ `generateNameCustom(seprator: string, retry?: int)`: Same as `generateName` but allows for a custom separator.

### Sample

This snippet will allow you to use `deno repl` to play with name generation:

```repl
> let names;
// undefined

// Importing our mod into the REPL
> import("./mod.ts").then(r => names = r)
// Promise { <pending> }

> names.generateName()
// magical_satoshi

> names.generateName(22)
// flamboyant_goldberg22

> names.generateNameCustom('***')
// vigorous***bohr
> names.generateNameCustom('***', 99)
// objective***jennings99
```

## 👨‍💻 Command Line

You can use this module as a Command Line tool by running `deno install -n docker-names .\cli.ts`, which will create a new alias `docker-names` within your terminal.

The CLI accepts commands in the following order:

1. `h -h --help | g -g --generate`: The command itself: **H**elp or **G**enerate, defaults to `g`
2. `retry | separator`: A string or a number. If a number is informed it'll be used as `retry`, else as a `separator`
3. `separator`: If a `retry` is set this can be used to pick a `string` as separator

The following are all valid inputs for the CLI:

```repl
deno run .\cli.ts ... results in something_somegion
deno run .\cli.ts g "@" ... results in something@someone
deno run .\cli.ts g 10 ... results in something_someone10
deno run .\cli.ts g 20 "@" ... results in something@someone20
```