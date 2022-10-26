function between(a, b) {
  // your code here
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

// alternate solution
function between(a, b) {
  const betweenArray = [];

  while (a <= b) {
    betweenArray.push(a);
    a++;
  }

  return betweenArray;
}
