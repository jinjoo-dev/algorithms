function solution(a, b) {
  let answer = 0;

  for (let min = Math.min(a, b); min <= Math.max(a, b); min += 1) {
    answer += min;
  }
  return answer;
}
