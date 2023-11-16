function getAverage(marks) {
  let sum = 0;
  for (let i = 1; i < marks.length; i++) {
    sum += marks[i];
  }
  let result = sum / marks.length;
  return Math.floor(result);
}

function getAverage(marks) {
  let sum = marks.reduce((a, c) => a + c, 0);
  let result = sum / marks.length;
  return Math.floor(result);
}

const getAverage = marks =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);
