const { expect } = require("chai");
const { solution } = require("./solution");

describe("정수 내림차순으로 배치하기", () => {
  it("[test 1]", () => {
    const n = 118372;
    const result = 873211;
    expect(solution(n)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const n = 591374;
    const result = 975431;
    expect(solution(n)).to.be.eql(result);
  });
});
