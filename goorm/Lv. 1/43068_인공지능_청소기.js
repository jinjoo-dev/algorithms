/**
 *  구름LEVEL
 *  https://level.goorm.io/exam/43068/1a-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EC%B2%AD%EC%86%8C%EA%B8%B0/quiz/1
 *  Algorithm: 수학
 *
 * 최소 이동 시간: |x| + |y| >= n 이어야 함
 * 남은 시간의 활용: 남은 시간이 짝수여야만 목표 지점 x, y에 도달한 후, 남은 시간을 제자리 이동으로 모두 소진하여 정확히 n초에 멈출 수 있음
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t = null;
const testResult = [];

function test(x, y, n) {
  const absX = Math.abs(x);
  const absY = Math.abs(y);

  if (absX + absY === n) return true;

  if (absX + absY > n) return false;

  if ((n - (absX + absY)) % 2 === 0) return true;

  return false;
}

rl.on("line", function (raw) {
  const line = raw.trim();
  if (t === null) {
    t = Number(line);
    return;
  }

  const [x, y, n] = line.split(" ").map(Number);

  testResult.push(test(x, y, n));

  if (t === testResult.length) rl.close();
}).on("close", function () {
  console.log(testResult.map((test) => (test ? "YES" : "NO")).join("\n"));
  process.exit();
});
