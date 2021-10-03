const solution = (phoneNumber) => {
  let frontLength = phoneNumber.length - 4;
  let result = "";
  for (let i = 0; i < phoneNumber.length; i++) {
    if (i < frontLength) {
      result += "*";
    } else {
      result += phoneNumber[i];
    }
  }
  return result;
};

module.exports = { solution };

// 뒷 4자리를 제외, 전화 번호의 길이는 일정하지 않음
// 전체 길이에서 뒷 4자리만 남기도록 한다.
// 제외한 남은 길이 만큼 반복해서 *로 대체
