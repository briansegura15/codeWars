function strCount(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) count++;
  }

  return count;
}

// alternate soltion

function strCount(str, letter) {
  return str.split("").filter(c => c == letter).length;
}
