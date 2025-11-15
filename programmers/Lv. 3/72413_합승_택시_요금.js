/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/68936
 * 
 *  Algorithm: Graph, 다익스트라
 * 
 *  어떤 정점 k를 “갈라지는 지점”으로 선택했을 때의 최소 요금 구하기

[정확성 테스트]
테스트 1 〉	통과 (0.32ms, 33.3MB)
테스트 2 〉	통과 (0.31ms, 33.4MB)
테스트 3 〉	통과 (0.32ms, 33.4MB)
테스트 4 〉	통과 (0.47ms, 33.4MB)
테스트 5 〉	통과 (0.42ms, 33.4MB)
테스트 6 〉	통과 (0.46ms, 33.5MB)
테스트 7 〉	통과 (0.44ms, 33.5MB)
테스트 8 〉	통과 (0.45ms, 33.5MB)
테스트 9 〉	통과 (0.59ms, 33.5MB)
테스트 10 〉	통과 (0.55ms, 33.6MB)

[효율성 테스트]
테스트 1 〉	통과 (3.12ms, 36.3MB)
테스트 2 〉	통과 (16.36ms, 39.3MB)
테스트 3 〉	통과 (15.10ms, 38.1MB)
테스트 4 〉	통과 (14.40ms, 38.1MB)
테스트 5 〉	통과 (14.30ms, 38.1MB)
테스트 6 〉	통과 (17.19ms, 38.1MB)
테스트 7 〉	통과 (34.04ms, 49.6MB)
테스트 8 〉	통과 (29.30ms, 49.2MB)
테스트 9 〉	통과 (30.37ms, 49.3MB)
테스트 10 〉	통과 (29.57ms, 49.5MB)
테스트 11 〉	통과 (28.66ms, 49.2MB)
테스트 12 〉	통과 (28.98ms, 43.6MB)
테스트 13 〉	통과 (29.01ms, 43.5MB)
테스트 14 〉	통과 (28.67ms, 43.6MB)
테스트 15 〉	통과 (25.07ms, 43.7MB)
테스트 16 〉	통과 (14.59ms, 38MB)
테스트 17 〉	통과 (14.58ms, 38.2MB)
테스트 18 〉	통과 (14.37ms, 38.1MB)
테스트 19 〉	통과 (15.10ms, 38.7MB)
테스트 20 〉	통과 (18.22ms, 38.8MB)
테스트 21 〉	통과 (16.23ms, 38.9MB)
테스트 22 〉	통과 (24.31ms, 43.9MB)
테스트 23 〉	통과 (25.43ms, 43.6MB)
테스트 24 〉	통과 (24.57ms, 44.2MB)
테스트 25 〉	통과 (9.02ms, 36.9MB)
테스트 26 〉	통과 (8.75ms, 36.9MB)
테스트 27 〉	통과 (18.57ms, 39MB)
테스트 28 〉	통과 (15.98ms, 38.9MB)
테스트 29 〉	통과 (3.24ms, 37.8MB)
테스트 30 〉	통과 (2.89ms, 37.9MB)
 */

function getGraph(n, fares) {
  const graph = Array.from({ length: n + 1 }, () => []);

  // 양방향 그래프로 구성
  for (const [a, b, c] of fares) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  return graph;
}

function dijkstra(n, start, graph) {
  const dist = Array(n + 1).fill(Infinity);
  const visited = Array(n + 1).fill(false);

  dist[start] = 0;

  // 정점 개수만큼 반복
  for (let i = 1; i <= n; i += 1) {
    // 1) 방문하지 않은 노드 중 dist가 가장 작은 노드 선택
    let minDist = Infinity;
    let node = -1;

    for (let j = 1; j <= n; j += 1) {
      if (!visited[j] && dist[j] < minDist) {
        minDist = dist[j];
        node = j;
      }
    }

    if (node === -1) break; // 더 이상 갈 곳 없음
    visited[node] = true;

    // 2) 선택된 노드에서 인접한 노드들 거리 갱신 (Relaxation)
    for (const [next, cost] of graph[node]) {
      const newCost = dist[node] + cost;
      if (newCost < dist[next]) {
        dist[next] = newCost;
      }
    }
  }

  return dist;
}

function solution(n, s, a, b, fares) {
  const graph = getGraph(n, fares);

  const distS = dijkstra(n, s, graph);
  const distA = dijkstra(n, a, graph);
  const distB = dijkstra(n, b, graph);

  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i <= n; i += 1) {
    min = Math.min(distS[i] + distA[i] + distB[i], min);
  }

  return min;
}
