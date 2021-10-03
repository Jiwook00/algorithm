const { expect } = require("chai");
const { solution } = require("./phoneNumber");

describe("핸드폰 번호 가리기", () => {
  it("[test 1]", () => {
    const phoneNumber = "01033334444";
    const result = "*******4444";
    expect(solution(phoneNumber)).to.be.eql(result);
  });

  it("[test 2]", () => {
    const phoneNumber = "027778888";
    const result = "*****8888";
    expect(solution(phoneNumber)).to.be.eql(result);
  });
});
