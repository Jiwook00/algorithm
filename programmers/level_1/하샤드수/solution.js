const solution = (x) => {
  const strArr = (x + "").split("");
  const sum = strArr.reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = { solution };

// 문자열 -> 배열 -> 숫자
// 두 수 더하고 x로 나누기
