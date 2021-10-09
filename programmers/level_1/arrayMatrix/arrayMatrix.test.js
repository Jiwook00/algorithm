const { expect } = require("chai");
const { solution } = require("./arrayMatrix");

describe("행렬의 덧셈", () => {
  it("[test 1]", () => {
    const arr1 = [
      [1, 2],
      [2, 3],
    ];
    const arr2 = [
      [3, 4],
      [5, 6],
    ];
    const result = [
      [4, 6],
      [7, 9],
    ];
    expect(solution(arr1, arr2)).to.deep.eql(result);
  });

  it("[test 2]", () => {
    const arr1 = [[1], [2]];
    const arr2 = [[3], [4]];
    const result = [[4], [6]];
    expect(solution(arr1, arr2)).to.deep.eql(result);
  });
});
