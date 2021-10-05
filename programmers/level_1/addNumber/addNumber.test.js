const { expect } = require("chai");
const { solution } = require("./addNumber");

describe("없는 숫자 더하기", () => {
  it("[test 1]", () => {
    const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
    const result = 14;
    expect(solution(numbers)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const numbers = [5, 8, 4, 0, 6, 7, 9];
    const result = 6;
    expect(solution(numbers)).to.be.eql(result);
  });
});
