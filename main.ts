import { mkdirSync, writeFileSync } from "node:fs";

// One word to erase from the dictionary forever.
// v2 (revised): "Irregardless" — the joke comes from the word itself.
// It is a double negative (ir- + regardless) that people insist is a
// word; deleting it is the dictionary correcting its own mistake, and
// the gap it leaves is nothing, because nobody ever needed it. Fresher
// than "Moist", which the whole field will pick first, and the laugh
// lands the moment the reader sounds out the double negative.
const word = "Irregardless";

// Validate: 1-77 Unicode code points, one word, non-blank.
const count = [...word].length;
if (count < 1 || count > 77) {
  throw new Error(`word is ${count} code points, must be 1-77`);
}
if (!word.trim() || /\s/.test(word)) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
// Exactly the word: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", word, "utf8");
