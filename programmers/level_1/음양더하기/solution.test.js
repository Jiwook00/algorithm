const { expect } = require("chai");
const { solution } = require("./solution");

describe("응양 더하기", () => {
  it("[test 1]", () => {
    const absolutes = [4, 7, 12];
    const signs = [true, false, true];
    const result = 9;
    expect(solution(absolutes, signs)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const absolutes = [1, 2, 3];
    const signs = [false, false, true];
    const result = 0;
    expect(solution(absolutes, signs)).to.be.eql(result);
  });
});
