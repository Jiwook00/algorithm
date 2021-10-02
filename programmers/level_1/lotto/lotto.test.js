const { expect } = require("chai");
const { solution } = require("./lotto");

describe("로또의 최고 순위와 최저 순위", () => {
  it("[test 1]", () => {
    const lottos = [44, 1, 0, 0, 31, 25];
    const winNums = [31, 10, 45, 1, 6, 19];
    const result = [3, 5];
    expect(solution(lottos, winNums)).to.deep.equal(result);
  });

  it("[test 2]", () => {
    const lottos = [0, 0, 0, 0, 0, 0];
    const winNums = [38, 19, 20, 40, 15, 25];
    const result = [1, 6];
    expect(solution(lottos, winNums)).to.deep.equal(result);
  });

  it("[test 3]", () => {
    const lottos = [45, 4, 35, 20, 3, 9];
    const winNums = [20, 9, 3, 45, 4, 35];
    const result = [1, 1];
    expect(solution(lottos, winNums)).to.deep.equal(result);
  });
});
