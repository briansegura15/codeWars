function checkExam(array1, array2) {
  var score = 0;

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      score += 4;
    } else if (array2[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }

  if (score < 0) {
    score = 0;
  }

  return score;
}

// alternate solution

const checkExam = (array1, array2) => {
  let result = array2.reduce((score, answer, i) => {
    if (answer == array1[i]) return (score += 4);
    else if (answer == 0) return (score += 0);
    else return score - 1;
  }, 0);
  return result < 0 ? 0 : result;
};
