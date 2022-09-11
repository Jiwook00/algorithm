const solution = (a, b) => {
  const answer = a.reduce((acc, cur, i) => {
    acc += cur * b[i];
    return acc;
  }, 0);

  return answer;
};

module.exports = { solution };
