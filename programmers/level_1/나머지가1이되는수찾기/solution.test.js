const { expect } = require("chai");
const { solution } = require("./solution");

describe("나머지가 1이 되는 수 찾기", () => {
  it("[test 1]", () => {
    const n = 10;
    const result = 3;
    expect(solution(n)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const n = 12;
    const result = 11;
    expect(solution(n)).to.be.eql(result);
  });
});
