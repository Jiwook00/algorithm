const solution = (num) => {
  const recursion = (num, count) => {
    if (num === 1) {
      return count;
    }
    if (count === 500) {
      return -1;
    }
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    count = count + 1;
    return recursion(num, count);
  };

  const result = recursion(num, 0);

  return result;
};

module.exports = { solution };

// num이 1 = count 리턴
// count가 500 = 리턴
// 콜라츠 추측 계산
// count + 1
// 수정 된 num과 count로 반복
