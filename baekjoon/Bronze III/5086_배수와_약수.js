/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/5086
 *
 *  Title: 배수와 약수
 *  Algorithm: 수학, 사칙연산
 */

const testCases = `${require("fs").readFileSync("/dev/stdin")}`
  .trim()
  .split(/\n/);

for (let i = 0; i < testCases.length - 1; i += 1) {
  const [first, second] = testCases[i].split(" ").map(Number);

  const isFactor = second % first === 0;
  const isMultiple = first % second === 0;

  const result = isFactor ? "factor" : isMultiple ? "multiple" : "neither";
  console.log(result);
}
