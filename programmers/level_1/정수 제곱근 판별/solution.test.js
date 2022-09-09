const { expect } = require("chai");
const { solution } = require("./solution");

describe("정수 제곱근 판별", () => {
  it("[test 1]", () => {
    const n = 121;
    const result = 144;
    expect(solution(n)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const n = 3;
    const result = -1;
    expect(solution(n)).to.be.eql(result);
  });
});
