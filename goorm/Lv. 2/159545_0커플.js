/**
 *  구름LEVEL
 *  https://level.goorm.io/exam/159545/0%EC%BB%A4%ED%94%8C/quiz/1
 */

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let count = null;

  for await (const raw of rl) {
    const line = raw.trim();
    if (!line) continue;

    if (count === null) {
      count = line;
      continue;
    }

    const peoples = line
      .split(" ")
      .map((people) => Number(people))
      .reduce((a, b) => a + b);

    console.log(peoples);

    rl.close();
  }

  process.exit();
})();
