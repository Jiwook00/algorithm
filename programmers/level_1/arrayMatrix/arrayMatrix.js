const solution = (arr1, arr2) => {
  const result = [];

  const sumArr = (a, b) => {
    const result = [];
    for (let i = 0; i < a.length; i++) {
      result.push(a[i] + b[i]);
    }
    return result;
  };

  for (let i = 0; i < arr1.length; i++) {
    const resultArr = sumArr(arr1[i], arr2[i]);
    result.push(resultArr);
  }

  return result;
};

module.exports = { solution };

// 배열 길이 만큼 반복
// 같은 인덱스의 원소 끼리 덧셈
// 배열과 배열의 합을 구하는 함수
// arr1[i][i] + arr2[i][i]
