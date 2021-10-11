const { expect } = require("chai");
const { solution } = require("./solution");

describe("이상한 문자 만들기", () => {
  it("[test 1]", () => {
    const s = "try hello world";
    const result = "TrY HeLlO WoRlD";
    expect(solution(s)).to.be.eql(result);
  });
});
