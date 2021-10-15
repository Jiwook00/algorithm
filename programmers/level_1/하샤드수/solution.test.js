const { expect } = require("chai");
const { solution } = require("./solution");

describe("하샤드 수", () => {
  it("[test 1]", () => {
    const x = 10;
    const result = true;
    expect(solution(x)).to.be.eql(result);
  });

  it("[test 1]", () => {
    const x = 12;
    const result = true;
    expect(solution(x)).to.be.eql(result);
  });

  it("[test 1]", () => {
    const x = 11;
    const result = false;
    expect(solution(x)).to.be.eql(result);
  });

  it("[test 1]", () => {
    const x = 13;
    const result = false;
    expect(solution(x)).to.be.eql(result);
  });
});
