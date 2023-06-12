function findShort(s) {
  // break strings into an array of strings
  let arr = s.split(" ");
  //   declare the smallest string
  let smallest = arr[0];
  //   walk through array to compare all other strings
  for (let i = 0; i < arr.length; i++) {
    // change value of smallest element accordingly
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }

  return smallest.length;
}

// alternate solution

function findShort(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}
