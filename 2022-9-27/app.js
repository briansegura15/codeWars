function getCount(str) {
  //     adds where to keep count
  let count = 0;
  //   Establishes what a vowel is
  const vowels = ["a", "e", "i", "o", "u"];
  //   creates a loop to iterate over the argument
  for (let i = 0; i < str.length; i++) {
    //     creates a nested loop to iterate over possible vowels
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

// Alternate solution

function getCount(str) {
  return str.split("").filter(c => "aeiouAEIOU".includes(c)).length;
}
