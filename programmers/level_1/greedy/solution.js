const solution = (n, lost, reserve) => {
  const deleteNum = (arr, num) => {
    return arr.filter((value) => value !== num);
  };

  for (let i = 0; i < reserve.length; i++) {
    console.log("reserve", reserve);
    console.log("lost", lost);
    if (lost[0] === reserve[i] + 1 || lost[0] === reserve[i] - 1) {
      lost = lost.slice(1);
      reserve = deleteNum(reserve, reserve[i]);
    }
  }
  return n - lost.length;
};

module.exports = { solution };

// 빌려 줄 때 lost 수 -
// 전체 결과는 n - lost
// 빌려주면 해당 학생은 lost와 reserve에서 모두 제거

// lost[0] === reserve[0] + 1 || lost[0] === reserve[0] -1
//
