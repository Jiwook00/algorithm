const { expect } = require("chai");
const { solution } = require("./collatz");

describe("콜라츠 추측", () => {
  it("[test 1]", () => {
    const n = 6;
    const result = 8;
    expect(solution(n)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const n = 16;
    const result = 4;
    expect(solution(n)).to.be.eql(result);
  });

  it("[test 3]", () => {
    const n = 626331;
    const result = -1;
    expect(solution(n)).to.be.eql(result);
  });
});
