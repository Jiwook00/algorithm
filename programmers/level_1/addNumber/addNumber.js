const solution = (numbers) => {
  let answer = 0;
  const sum = numbers.reduce((cur, acc) => {
    return cur + acc;
  }, 0);
  answer = 45 - sum;
  return answer;
};

module.exports = { solution };

// 0~9 까지의 모든 합 = 45
// 45 빼기 numbers 배열의 합
