const { expect } = require("chai");
const { solution } = require("./solution");

describe("시저 암호", () => {
  it("[test 1]", () => {
    const s = "AB";
    const n = 1;
    const result = "BC";
    expect(solution(s, n)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const s = "z";
    const n = 1;
    const result = "a";
    expect(solution(s, n)).to.be.eql(result);
  });

  it("[test 3]", () => {
    const s = "a B z";
    const n = 4;
    const result = "e F d";
    expect(solution(s, n)).to.be.eql(result);
  });
});
