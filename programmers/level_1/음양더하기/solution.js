const solution = (absolutes, signs) => {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      answer = answer + absolutes[i] * -1;
    } else {
      answer = answer + absolutes[i];
    }
  }
  return answer;
};

module.exports = { solution };
