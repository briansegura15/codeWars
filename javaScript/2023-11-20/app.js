function monkeyCount(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// alternate solution

function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));
  return arr;
}
