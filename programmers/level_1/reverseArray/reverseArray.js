const solution = (n) => {
  const answer = [];
  const str = String(n);
  let i = str.length - 1;

  while (i > -1) {
    answer.push(Number(str[i]));
    i--;
  }
  return answer;
};

module.exports = { solution };

// 문자열로 변환
// 문자열 길이 만큼 반대로 반복
// 숫자로 변환해서 푸쉬
