/**
 *  구름LEVEL
 *  https://level.goorm.io/exam/48130/%EB%94%B1%EC%A7%80%EB%86%80%EC%9D%B4/quiz/1
 *  Algorithm: 이진 탐색, 투 포인터
 */

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const input = [];

  for await (const line of rl) {
    input.push(line.trim());
    if (input.length === 2) rl.close();
  }

  const [conditions, P] = input;
  const [_, D] = conditions.split(" ").map(Number);
  const positions = P.split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let start = 0;
  let end = 0;
  let maxCount = 1;

  while (positions[end] && positions[start]) {
    maxCount = Math.max(maxCount, end - start + 1);
    if (positions[end + 1] - positions[start] <= D) {
      end += 1;
      continue;
    }

    start += 1;
  }

  console.log(positions.length - maxCount);
  process.exit();
})();
