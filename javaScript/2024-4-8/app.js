function checkExam(array1, array2) {
  // good luck
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
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

function checkExam(array1, array2) {
  return Math.max(
    0,
    array1.reduce((score, answer, index) => {
      if (answer === array2[index]) {
        return score + 4;
      } else if (array2[index] === "") {
        return score;
      } else {
        return score - 1;
      }
    }, 0)
  );
}
