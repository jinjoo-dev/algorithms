/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/120869
 *
 *  테스트 1 〉	통과 (0.05ms, 33.6MB)
 *  테스트 2 〉	통과 (0.12ms, 33.6MB)
 *  테스트 3 〉	통과 (0.05ms, 33.7MB)
 *  테스트 4 〉	통과 (0.05ms, 33.6MB)
 *  테스트 5 〉	통과 (0.05ms, 33.7MB)
 *  테스트 6 〉	통과 (0.05ms, 33.6MB)
 *  테스트 7 〉	통과 (0.05ms, 33.5MB)
 *  테스트 8 〉	통과 (0.05ms, 33.7MB)
 *  테스트 9 〉	통과 (0.05ms, 33.6MB)
 */

function solution(spell, dic) {
  return dic.some((word) =>
    spell.every((character) => word.includes(character))
  )
    ? 1
    : 2;
}
