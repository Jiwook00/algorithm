const solution = (n) => {
  for (let i = 2; i < 1000000; i++) {
    if (n % i === 1) {
      return i;
    }
  }
};

module.exports = { solution };

// 2 부터 시작
// % 값이 1이 될 때까지 반복
