/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/86971
 *
 *  Algorithm: 그래프, BFS, DFS, 완전 탐색, 브루트포트
 */

function bfs(graph, cut, start) {
  const q = [start];
  const vis = new Set([start]);
  let head = 0;

  while (head < q.length) {
    const cur = q[head++];

    for (const next of graph[cur]) {
      // 끊어진 간선 체크
      if (
        (cur === cut[0] && next === cut[1]) ||
        (cur === cut[1] && next === cut[0])
      ) {
        continue;
      }

      if (vis.has(next)) continue;

      q.push(next);
      vis.add(next);
    }
  }

  return vis.size;
}

function solution(n, wires) {
  let minDiff = Infinity;

  // 인접 리스트 구성
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // 각 간선을 끊어보면서 최소 차이 계산
  for (const wire of wires) {
    // 한 쪽만 세고, 다른 쪽은 n에서 빼기
    const countA = bfs(graph, wire, wire[0]);
    const countB = n - countA;

    minDiff = Math.min(Math.abs(countA - countB), minDiff);
  }

  return minDiff;
}
