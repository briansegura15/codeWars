function reverseWords(str) {
  // Create an empty array
  let reverseWordArr = str
    //   split the array by word
    .split(" ")
    // split every word by letter, reverse the letters, rejoin the letters
    .map(word => word.split("").reverse().join(""));
  // rejoin the array by words
  return reverseWordArr.join(" ");
}

// Alternate solution
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
