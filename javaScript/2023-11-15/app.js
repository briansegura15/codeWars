function countBy(x, n) {
  let resultArr = [];
  for (let i = 1; i <= n; i++) {
    resultArr.push(x * i);
  }
  return resultArr;
}
