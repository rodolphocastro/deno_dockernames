import { pickRandomElement } from "./rand.ts";

/**
 * Adjectives available for name generation.
 */
export const adjectives: Array<string> = [
  // https://dictionary.cambridge.org/dictionary/english/admiring
  "admiring",

  // https://dictionary.cambridge.org/dictionary/english/adoring
  "adoring",

  // https://dictionary.cambridge.org/dictionary/english/affectionate
  "affectionate",

  // https://dictionary.cambridge.org/dictionary/english/agitated
  "agitated",

  // https://dictionary.cambridge.org/dictionary/english/amazing
  "amazing",

  // https://dictionary.cambridge.org/dictionary/english/angry
  "angry",

  // https://dictionary.cambridge.org/dictionary/english/awesome
  "awesome",

  // https://dictionary.cambridge.org/dictionary/english/beautiful
  "beautiful",

  // https://dictionary.cambridge.org/dictionary/english/blissful
  "blissful",

  // https://dictionary.cambridge.org/dictionary/english/bold
  "bold",

  // https://dictionary.cambridge.org/dictionary/english/boring
  "boring",

  // https://dictionary.cambridge.org/dictionary/english/brave
  "brave",

  // https://dictionary.cambridge.org/dictionary/english/busy
  "busy",

  // https://dictionary.cambridge.org/dictionary/english/charming
  "charming",

  // https://dictionary.cambridge.org/dictionary/english/clever
  "clever",

  // https://dictionary.cambridge.org/dictionary/english/cool
  "cool",

  // https://dictionary.cambridge.org/dictionary/english/compassionate
  "compassionate",

  // https://dictionary.cambridge.org/dictionary/english/competent
  "competent",

  // https://dictionary.cambridge.org/dictionary/english/condescending
  "condescending",

  // https://dictionary.cambridge.org/dictionary/english/confident
  "confident",

  // https://dictionary.cambridge.org/dictionary/english/cranky
  "cranky",

  // https://dictionary.cambridge.org/dictionary/english/crazy
  "crazy",

  // https://dictionary.cambridge.org/dictionary/english/dazzling
  "dazzling",

  // https://dictionary.cambridge.org/dictionary/english/determined
  "determined",

  // https://dictionary.cambridge.org/dictionary/english/distracted
  "distracted",

  // https://dictionary.cambridge.org/dictionary/english/dreamy
  "dreamy",

  // https://dictionary.cambridge.org/dictionary/english/eager
  "eager",

  // https://dictionary.cambridge.org/dictionary/english/ecstatic
  "ecstatic",

  // https://dictionary.cambridge.org/dictionary/english/elastic
  "elastic",

  // https://dictionary.cambridge.org/dictionary/english/elated
  "elated",

  // https://dictionary.cambridge.org/dictionary/english/elegant
  "elegant",

  // https://dictionary.cambridge.org/dictionary/english/eloquent
  "eloquent",

  // https://dictionary.cambridge.org/dictionary/english/epic
  "epic",

  // https://dictionary.cambridge.org/dictionary/english/exciting
  "exciting",

  // https://dictionary.cambridge.org/dictionary/english/fervent
  "fervent",

  // https://dictionary.cambridge.org/dictionary/english/festive
  "festive",

  // https://dictionary.cambridge.org/dictionary/english/flamboyant
  "flamboyant",

  // https://dictionary.cambridge.org/dictionary/english/focused
  "focused",

  // https://dictionary.cambridge.org/dictionary/english/friendly
  "friendly",

  // https://dictionary.cambridge.org/dictionary/english/frosty
  "frosty",

  // https://dictionary.cambridge.org/dictionary/english/funny
  "funny",

  // https://dictionary.cambridge.org/dictionary/english/gallant
  "gallant",

  // https://dictionary.cambridge.org/dictionary/english/gifted
  "gifted",

  // https://dictionary.cambridge.org/dictionary/english/goofy
  "goofy",

  // https://dictionary.cambridge.org/dictionary/english/gracious
  "gracious",

  // https://dictionary.cambridge.org/dictionary/english/great
  "great",

  // https://dictionary.cambridge.org/dictionary/english/happy
  "happy",

  // https://dictionary.cambridge.org/dictionary/english/hardcore
  "hardcore",

  // https://dictionary.cambridge.org/dictionary/english/heuristic
  "heuristic",

  // https://dictionary.cambridge.org/dictionary/english/hopeful
  "hopeful",

  // https://dictionary.cambridge.org/dictionary/english/hungry
  "hungry",

  // https://dictionary.cambridge.org/dictionary/english/infallible
  "infallible",

  // https://dictionary.cambridge.org/dictionary/english/inspiring
  "inspiring",

  // https://dictionary.cambridge.org/dictionary/english/interesting
  "interesting",

  // https://dictionary.cambridge.org/dictionary/english/intelligent
  "intelligent",

  // https://dictionary.cambridge.org/dictionary/english/jolly
  "jolly",

  // https://dictionary.cambridge.org/dictionary/english/jovial
  "jovial",

  // https://dictionary.cambridge.org/dictionary/english/keen
  "keen",

  // https://dictionary.cambridge.org/dictionary/english/kind
  "kind",

  // https://dictionary.cambridge.org/dictionary/english/laughing
  "laughing",

  // https://dictionary.cambridge.org/dictionary/english/loving
  "loving",

  // https://dictionary.cambridge.org/dictionary/english/lucid
  "lucid",

  // https://dictionary.cambridge.org/dictionary/english/magical
  "magical",

  // https://dictionary.cambridge.org/dictionary/english/mystifying
  "mystifying",

  // https://dictionary.cambridge.org/dictionary/english/modest
  "modest",

  // https://dictionary.cambridge.org/dictionary/english/musing
  "musing",

  // https://dictionary.cambridge.org/dictionary/english/naughty
  "naughty",

  // https://dictionary.cambridge.org/dictionary/english/nervous
  "nervous",

  // https://dictionary.cambridge.org/dictionary/english/nice
  "nice",

  // https://dictionary.cambridge.org/dictionary/english/nifty
  "nifty",

  // https://dictionary.cambridge.org/dictionary/english/nostalgic
  "nostalgic",

  // https://dictionary.cambridge.org/dictionary/english/objective
  "objective",

  // https://dictionary.cambridge.org/dictionary/english/optimistic
  "optimistic",

  // https://dictionary.cambridge.org/dictionary/english/peaceful
  "peaceful",

  // https://dictionary.cambridge.org/dictionary/english/pedantic
  "pedantic",

  // https://dictionary.cambridge.org/dictionary/english/pensive
  "pensive",

  // https://dictionary.cambridge.org/dictionary/english/practical
  "practical",

  // https://dictionary.cambridge.org/dictionary/english/priceless
  "priceless",

  // https://dictionary.cambridge.org/dictionary/english/quirky
  "quirky",

  // https://dictionary.cambridge.org/dictionary/english/quizzical
  "quizzical",

  // https://dictionary.cambridge.org/dictionary/english/recursing
  "recursing",

  // https://dictionary.cambridge.org/dictionary/english/relaxed
  "relaxed",

  // https://dictionary.cambridge.org/dictionary/english/reverent
  "reverent",

  // https://dictionary.cambridge.org/dictionary/english/romantic
  "romantic",

  // https://dictionary.cambridge.org/dictionary/english/sad
  "sad",

  // https://dictionary.cambridge.org/dictionary/english/serene
  "serene",

  // https://dictionary.cambridge.org/dictionary/english/sharp
  "sharp",

  // https://dictionary.cambridge.org/dictionary/english/silly
  "silly",

  // https://dictionary.cambridge.org/dictionary/english/sleepy
  "sleepy",

  // https://dictionary.cambridge.org/dictionary/english/stoic
  "stoic",

  // https://dictionary.cambridge.org/dictionary/english/strange
  "strange",

  // https://dictionary.cambridge.org/dictionary/english/stupefied
  "stupefied",

  // https://dictionary.cambridge.org/dictionary/english/suspicious
  "suspicious",

  // https://dictionary.cambridge.org/dictionary/english/sweet
  "sweet",

  // https://dictionary.cambridge.org/dictionary/english/tender
  "tender",

  // https://dictionary.cambridge.org/dictionary/english/thirsty
  "thirsty",

  // https://dictionary.cambridge.org/dictionary/english/trusting
  "trusting",

  // https://dictionary.cambridge.org/dictionary/english/unruffled
  "unruffled",

  // https://dictionary.cambridge.org/dictionary/english/upbeat
  "upbeat",

  // https://dictionary.cambridge.org/dictionary/english/vibrant
  "vibrant",

  // https://dictionary.cambridge.org/dictionary/english/vigilant
  "vigilant",

  // https://dictionary.cambridge.org/dictionary/english/vigorous
  "vigorous",

  // https://dictionary.cambridge.org/dictionary/english/wizardly
  "wizardly",

  // https://dictionary.cambridge.org/dictionary/english/wonderful
  "wonderful",

  // https://dictionary.cambridge.org/dictionary/english/xenodochial
  "xenodochial",

  // https://dictionary.cambridge.org/dictionary/english/youthful
  "youthful",

  // https://dictionary.cambridge.org/dictionary/english/zealous
  "zealous",

  // https://dictionary.cambridge.org/dictionary/english/zen
  "zen",
];

/**
 * Picks a random adjective.
 */
export function pickAdjective(): string {
  return pickRandomElement(adjectives);
}
