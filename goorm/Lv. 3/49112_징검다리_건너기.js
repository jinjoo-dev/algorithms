/**
 *  구름LEVEL
 *  https://level.goorm.io/exam/49112/%EC%A7%95%EA%B2%80%EB%8B%A4%EB%A6%AC-%EA%B1%B4%EB%84%88%EA%B8%B0/quiz/1
 */

// 상대적으로 느린 배열에 인덱싱하지 않고 단일 변수에 갱신하여 공간복잡도를 아끼고 실행 속도를 빠르게 하는 방법
{
  const readline = require("readline");

  (async () => {
    let rl = readline.createInterface({ input: process.stdin });
    const input = [];

    for await (const line of rl) {
      input.push(line.trim());
      if (input.length === 2) rl.close();
    }

    const stones = input[1].split(" ").map(Number);
    const n = stones.length;

    // n이 1~3이면 그냥 최소값
    if (n <= 3) {
      console.log(Math.min(...stones));
      process.exit();
    }

    let prev1 = stones[2];
    let prev2 = stones[1];
    let prev3 = stones[0];

    for (let i = 3; i < stones.length; i += 1) {
      const next = Math.min(prev1, prev2, prev3) + stones[i];
      prev3 = prev2;
      prev2 = prev1;
      prev1 = next;
    }

    console.log(Math.min(prev1, prev2, prev3));
    process.exit();
  })();
}

// 원본 배열을 직접 참조,수정하는 방법 (쉬운 접근법)
{
  const readline = require("readline");

  (async () => {
    let rl = readline.createInterface({ input: process.stdin });
    const input = [];

    for await (const line of rl) {
      input.push(line.trim());
      if (input.length === 2) rl.close();
    }

    const stones = input[1].split(" ").map(Number);

    for (let i = 3; i < stones.length; i += 1) {
      stones[i] =
        Math.min(stones[i - 1], stones[i - 2], stones[i - 3]) + stones[i];
    }

    console.log(
      Math.min(
        stones[stones.length - 1],
        stones[stones.length - 2],
        stones[stones.length - 3]
      )
    );
    process.exit();
  })();
}
