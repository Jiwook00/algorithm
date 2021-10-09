const { expect } = require("chai");
const { solution } = require("./removeMinimum");

describe("제일 작은 수 제거하기", () => {
  it("[test 1]", () => {
    const arr = [4, 3, 2, 1];
    const result = [4, 3, 2];
    expect(solution(arr)).to.deep.equal(result);
  });

  it("[test 2]", () => {
    const arr = [10];
    const result = [-1];
    expect(solution(arr)).to.deep.equal(result);
  });
});
