const solution = (n) => {
  const strArr = (n + "").split("");
  strArr.sort((a, b) => b - a);
  const result = strArr.reduce((acc, cur) => {
    acc += cur;
    return Number(acc);
  }, "");
  return result;
};

module.exports = { solution };
