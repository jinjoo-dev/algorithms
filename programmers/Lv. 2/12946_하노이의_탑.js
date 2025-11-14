/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/12946
 */

function hanoi(N, source, destination, auxiliary, history) {
  // 1. 재귀 탈출 조건
  if (N === 1) {
    // 원반이 1개일 때는 그냥 출발지에서 목적지로 옮기고 종료
    history.push([source, destination]);
    return;
  }

  // 2. N-1개의 원반을 경유지로 옮긴다.
  hanoi(N - 1, source, auxiliary, destination, history);

  // 3. 가장 큰 원반 (N번째) 1개를 목적지로 옮긴다.
  history.push([source, destination]);

  // 4. 경유지에 있는 N-1개의 원반을 목적지로 옮긴다.
  hanoi(N - 1, auxiliary, destination, source, history);
}

function solution(n) {
  const history = [];

  hanoi(n, 1, 3, 2, history);

  return history;
}
