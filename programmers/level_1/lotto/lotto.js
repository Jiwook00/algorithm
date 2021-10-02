const solution = (lottos, winNums) => {
  let high = 0;
  let low = 0;
  let answer = [];
  let rank = [6, 6, 5, 4, 3, 2, 1];

  for (let i = 0; i < 6; i++) {
    if (lottos.includes(winNums[i])) {
      high += 1;
      low += 1;
    }
    if (!lottos[i]) {
      high += 1;
    }
  }

  answer.push(rank[high]);
  answer.push(rank[low]);

  return answer;
};

/* 
0은 다 맞거나 다 틀리거나
0의 수 파악하기
윈 넘버, 로또(내림 차순)를 정렬
0번째 원소가 로또 배열에 있는지 비교하고 제거
일치하는 수가 있으면 카운트 1
윈 넘버 탐색이 끝났을 때 남은 로또 배열의 수 => 최소 등수
남은 로또 배열의 수 + 0 카운트 => 최고 등수
*/

module.exports = { solution };
