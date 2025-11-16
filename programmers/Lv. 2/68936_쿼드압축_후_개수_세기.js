/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/68936
 */

function solution(arr) {
  const n = arr.length;
  const result = [0, 0]; // [0 블록 개수, 1 블록 개수]

  function compress(x, y, size) {
    const first = arr[x][y];
    let same = true;

    // 현재 블록이 전부 같은 값인지 검사
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== first) {
          same = false;
          break;
        }
      }
      if (!same) break;
    }

    // 전부 같은 값이면 병합 (더 이상 쪼개지 않음)
    if (same) {
      result[first] += 1;
      return;
    }

    // 아니면 4등분해서 재귀적으로 다시 검사
    const half = size / 2;
    compress(x, y, half); // 왼쪽 위
    compress(x, y + half, half); // 오른쪽 위
    compress(x + half, y, half); // 왼쪽 아래
    compress(x + half, y + half, half); // 오른쪽 아래
  }

  compress(0, 0, n);
  return result;
}
