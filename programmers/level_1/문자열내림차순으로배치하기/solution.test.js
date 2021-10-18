const { expect } = require("chai");
const { solution } = require("./solution");

describe("문자열 내림차순으로 배치하기", () => {
  it("[test 1]", () => {
    const s = "Zbcdefg";
    const result = "gfedcbZ";
    expect(solution(s)).to.be.eql(result);
  });
});
