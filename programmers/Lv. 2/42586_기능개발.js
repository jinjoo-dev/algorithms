/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/42586
 *
 *  Algorithm: 스택, 큐
 */

{
  /*
  테스트 1 〉	통과 (0.08ms, 33.4MB)
  테스트 2 〉	통과 (0.16ms, 33.5MB)
  테스트 3 〉	통과 (0.15ms, 33.4MB)
  테스트 4 〉	통과 (0.16ms, 33.4MB)
  테스트 5 〉	통과 (0.07ms, 33.4MB)
  테스트 6 〉	통과 (0.08ms, 33.5MB)
  테스트 7 〉	통과 (0.23ms, 33.4MB)
  테스트 8 〉	통과 (0.06ms, 33.4MB)
  테스트 9 〉	통과 (0.16ms, 33.4MB)
  테스트 10 〉	통과 (0.24ms, 33.4MB)
  테스트 11 〉	통과 (0.05ms, 33.4MB)
  */
  function solution(progresses, speeds) {
    var answer = [];
    let lastTime = 0;

    while (progresses.length) {
      const program = progresses.shift();
      const speed = speeds.shift();

      const left = 100 - program;
      const time = Math.ceil(left / speed);

      if (lastTime >= time) {
        if (answer[answer.length - 1]) {
          answer[answer.length - 1] += 1;
          continue;
        }
        answer.push(1);
        continue;
      }

      lastTime = time;
      answer.push(1);
    }

    return answer;
  }
}
{
  /*
  테스트 1 〉	통과 (0.06ms, 33.4MB)
  테스트 2 〉	통과 (0.18ms, 33.4MB)
  테스트 3 〉	통과 (0.15ms, 33.4MB)
  테스트 4 〉	통과 (0.15ms, 33.4MB)
  테스트 5 〉	통과 (0.10ms, 33.4MB)
  테스트 6 〉	통과 (0.06ms, 33.4MB)
  테스트 7 〉	통과 (0.15ms, 33.4MB)
  테스트 8 〉	통과 (0.09ms, 33.4MB)
  테스트 9 〉	통과 (0.15ms, 33.4MB)
  테스트 10 〉	통과 (0.15ms, 33.4MB)
  테스트 11 〉	통과 (0.06ms, 33.4MB)
  */
  function solution(progresses, speeds) {
    const answer = [];

    // 각 작업이 완료되는데 필요한 일수 계산
    const days = progresses.map((progress, index) =>
      Math.ceil((100 - progress) / speeds[index])
    );

    let count = 1;
    let currentDay = days[0];

    for (let i = 1; i < days.length; i++) {
      if (days[i] <= currentDay) {
        // 현재 배포일에 함께 배포 가능
        count++;
      } else {
        // 새로운 배포일
        answer.push(count);
        count = 1;
        currentDay = days[i];
      }
    }

    // 마지막 배포 그룹 추가
    answer.push(count);

    return answer;
  }
}
