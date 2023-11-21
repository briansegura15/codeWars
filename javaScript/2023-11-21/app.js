function firstNonConsecutive(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

// alternate solution

function firstNonConsecutive(arr) {
  for (var i = 1; i < arr.length; i++) {
    var cur = arr[i];
    var prev = arr[i - 1];

    if (cur - prev > 1) {
      return cur;
    }
  }
  return null;
}
