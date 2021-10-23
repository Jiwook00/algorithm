const { expect } = require("chai");
const { solution } = require("./solution");

describe("소수 만들기", () => {
  it("[test 1]", () => {
    const num = 10;
    const result = 4;
    expect(solution(num)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const num = 5;
    const result = 3;
    expect(solution(num)).to.be.eql(result);
  });
});
