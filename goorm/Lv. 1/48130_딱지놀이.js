/**
 *  구름LEVEL
 *  https://level.goorm.io/exam/48130/%EB%94%B1%EC%A7%80%EB%86%80%EC%9D%B4/quiz/1
 */

{
  // NOTE: 인풋을 저장하지 않고 두 줄씩 읽어서 처리, 카드 레벨 별 카운트해서 비교
  const readline = require("readline");
  const MAX_LEVEL = 4;

  function getCards(cardsString) {
    return cardsString
      .split(" ")
      .map((card) => Number(card))
      .slice(1);
  }

  function judgeResult(a, b) {
    const cardsA = getCards(a);
    const cardsB = getCards(b);

    const countA = new Array(MAX_LEVEL + 1).fill(0);
    const countB = new Array(MAX_LEVEL + 1).fill(0);

    for (const level of cardsA) countA[level] += 1;
    for (const level of cardsB) countB[level] += 1;

    for (let i = MAX_LEVEL; i > 0; i -= 1) {
      if (countA[i] > countB[i]) return "A";
      if (countA[i] < countB[i]) return "B";
    }

    return "D";
  }

  (async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let total = null;
    let hold = null;
    const result = [];

    // 인풋 입력, 쌍으로 처리
    for await (const raw of rl) {
      const line = raw.trim();
      if (!line) continue;

      if (total === null) {
        total = Number(line);
        continue;
      }

      if (hold === null) {
        hold = line;
        continue;
      }

      result.push(judgeResult(hold, line));
      hold = null;

      if (result.length === total) rl.close();
    }

    console.log(result.join("\n"));
    process.exit();
  })();
}

{
  // NOTE: 정렬 후 카드 레벨 비교
  const readline = require("readline");

  function getCards(cardsString) {
    return cardsString
      .split(" ")
      .map((card) => Number(card))
      .slice(1)
      .sort((a, b) => b - a);
  }

  function judgeResult(a, b) {
    const cardsA = getCards(a);
    const cardsB = getCards(b);
    let result = "D";

    for (let i = 0; i < Math.max(cardsA.length, cardsB.length); i += 1) {
      if (cardsA[i] === cardsB[i]) continue;

      result = (cardsA[i] || 0) > (cardsB[i] || 0) ? "A" : "B";
      break;
    }

    return result;
  }

  (async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let count = 0;
    const input = [];
    const result = [];

    // 인풋 입력
    for await (const line of rl) {
      if (!count) {
        count = Number(line.trim()) * 2;
        continue;
      }

      input.push(line.trim());
      if (input.length === count) {
        rl.close();
      }
    }

    // 결과 계산
    for (let i = 0; i < input.length; i += 2) {
      result.push(judgeResult(input[i], input[i + 1]));
    }

    console.log(result.join("\n"));
    process.exit();
  })();
}
