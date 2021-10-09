const solution = (arr) => {
  const result = [];
  if (arr.length === 1) return [-1];
  const sortArr = arr.slice().sort((a, b) => a - b);
  const minimum = sortArr[0];

  arr.map((value) => {
    if (value !== minimum) {
      result.push(value);
    }
  });
  return result;
};
module.exports = { solution };

// 배열 복사
// 복사 배열 정렬 후 최소값 찾기
// 기존 배열과 비교
