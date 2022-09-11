const { expect } = require("chai");
const { solution } = require("./solution");

describe("내적", () => {
  it("[test 1]", () => {
    const a = [1, 2, 3, 4];
    const b = [-3, -1, 0, 2];
    const result = 3;
    expect(solution(a, b)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const a = [-1, 0, 1];
    const b = [1, 0, -1];
    const result = -2;
    expect(solution(a, b)).to.be.eql(result);
  });
});
