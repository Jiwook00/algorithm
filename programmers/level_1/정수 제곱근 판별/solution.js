const solution = (n) => {
  let answer = 0;
  for (let x = 1; x * x <= n; x++) {
    if (x * x === n) {
      answer = (x + 1) * (x + 1);
    } else {
      answer = -1;
    }
  }
  return answer;
};

module.exports = { solution };
