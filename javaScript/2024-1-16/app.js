function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else {
    return arr.reduce((acc, current, index) => {
      return current < arr[acc] ? index : acc;
    }, 0);
  }
}

// alternate solution

function min(arr, toReturn) {
  return toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}
