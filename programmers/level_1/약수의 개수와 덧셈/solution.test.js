const { expect } = require("chai");
const { solution } = require("./solution");

describe("약수의 개수와 덧셈", () => {
  it("[test 1]", () => {
    const left = 13;
    const right = 17;
    const result = 43;
    expect(solution(left, right)).to.be.eql(result);
  });

  it("[test 2", () => {
    const left = 24;
    const right = 27;
    const result = 52;
    expect(solution(left, right)).to.be.eql(result);
  });
});
