/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/77884
 */

/* 약수 개수 구하기 1
  테스트 1 〉	통과 (0.64ms, 33.4MB)
  테스트 2 〉	통과 (0.30ms, 33.6MB)
  테스트 3 〉	통과 (0.32ms, 33.5MB)
  테스트 4 〉	통과 (0.20ms, 33.5MB)
  테스트 5 〉	통과 (0.49ms, 33.4MB)
  테스트 6 〉	통과 (0.24ms, 33.4MB)
  테스트 7 〉	통과 (0.20ms, 33.5MB)
*/
function getDivisorsCount(n) {
  if (n === 1) return 1;

  let count = 1; // 최종 약수 개수 (1을 곱셈의 항등원으로 초기화)
  let temp = n; // 임시 변수에 N을 저장

  // 1. 소인수 2 처리 (가장 흔한 소수)
  let exponent = 0; // 지수 a
  while (temp % 2 === 0) {
    exponent++;
    temp /= 2;
  }
  if (exponent > 0) {
    count *= exponent + 1;
  }

  // 2. 홀수인 소인수 처리 (i=3부터 i*i <= temp까지 2씩 증가)
  for (let i = 3; i * i <= temp; i += 2) {
    exponent = 0;
    while (temp % i === 0) {
      exponent++;
      temp /= i;
    }
    if (exponent > 0) {
      count *= exponent + 1;
    }
  }

  // 3. 반복문 종료 후 temp가 1보다 크다면, temp 자체가 소인수임 (지수 1)
  if (temp > 1) {
    count *= 2; // (1 + 1)
  }

  return count;
}

/*
  약수 개수 구하기 2
  테스트 1 〉	통과 (4.58ms, 35.2MB)
  테스트 2 〉	통과 (2.14ms, 35.3MB)
  테스트 3 〉	통과 (1.71ms, 35.2MB)
  테스트 4 〉	통과 (1.82ms, 35.1MB)
  테스트 5 〉	통과 (3.32ms, 35.3MB)
  테스트 6 〉	통과 (1.55ms, 35.4MB)
  테스트 7 〉	통과 (1.06ms, 35.3MB)
 */
function getDivisorsCountSimple(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

// solution
function solution(left, right) {
  const count = Array.from(
    { length: right - left + 1 },
    (_, index) => left + index
  );

  const result = count.reduce((acc, curr) => {
    const divisorCount = getDivisorsCount(curr);

    if (divisorCount % 2) return acc - curr;

    return acc + curr;
  }, 0);

  return result;
}
