const solution = (s) => {
  var answer = "";
  const word = s.split(" ");
  word.map((value, k) => {
    k > 0 ? (answer += " ") : null;
    for (let i = 0; i < value.length; i++) {
      if (i % 2 === 0) {
        answer += value[i].toUpperCase();
      } else {
        answer += value[i].toLowerCase();
      }
    }
  });

  return answer;
};

module.exports = { solution };
