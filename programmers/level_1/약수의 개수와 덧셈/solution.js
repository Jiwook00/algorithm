const solution = (left, right) => {
  var answer = 0;

  const checkMeasure = (number) => {
    let count = 1;
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    return count % 2 === 0 ? number : -number;
  };

  let cur = left;
  while (cur <= right) {
    answer += checkMeasure(cur);
    cur++;
  }

  return answer;
};

module.exports = { solution };
