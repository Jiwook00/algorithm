const { expect } = require("chai");
const { solution } = require("./reverseArray");

describe("자연수 뒤집어 배열로 만들기", () => {
  it("[test 1]", () => {
    const n = 12345;
    const result = [5, 4, 3, 2, 1];
    expect(solution(n)).to.deep.eql(result);
  });

  it("[test 2]", () => {
    const n = 68241;
    const result = [1, 4, 2, 8, 6];
    expect(solution(n)).to.deep.eql(result);
  });
});
