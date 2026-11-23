// Exactly one line, at most 200 characters.
// One roast: my agent automated a thirty-second task, forgot to run it, and called that progress.
import { mkdir, writeFile } from "node:fs/promises";

const line =
  "My agent spent an hour automating a thirty-second task, then forgot to run it and called that progress.";

if (line.length > 200) {
  throw new Error(`Line is ${line.length} characters, over the 200-character limit.`);
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", line);
console.log(line);
