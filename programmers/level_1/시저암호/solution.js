const solution = (s, n) => {
  const alphaCodes = Array.from(Array(26)).map((cur, i) => i + 65);
  const upperCase = alphaCodes.map((code) => String.fromCharCode(code));
  const lowerCase = alphaCodes.map((code) =>
    String.fromCharCode(code).toLocaleLowerCase()
  );
  let result = "";

  const getString = (index, n, arr) => {
    index = index + n;
    if (index > 25) {
      index = index - 26;
    }
    return arr[index];
  };

  for (let i = 0; i < s.length; i++) {
    let upperIndex = upperCase.indexOf(s[i]);
    let lowerIndex = lowerCase.indexOf(s[i]);

    if (s[i] === " ") {
      result += " ";
    }
    if (upperIndex !== -1) {
      result += getString(upperIndex, n, upperCase);
    }
    if (lowerIndex !== -1) {
      result += getString(lowerIndex, n, lowerCase);
    }
  }
  return result;
};

module.exports = { solution };

// 알파벳 배열 만들기
// 배열에 일치하는 알파벳이 있으면 해당 인덱스의 +1 의 원소로 대체

// z 가 넘어갔을 때
// indexOf의 값이 26 넘을 때 26만큼 마이너스
