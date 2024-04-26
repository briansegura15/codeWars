function spinWords(sentence) {
  // Step 1: Split the sentence into words
  const words = sentence.split(" ");

  // Step 2: Reverse words with 5 or more letters
  const reversedWords = words.map(word => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  });

  // Step 3: Join the words back into a single string
  return reversedWords.join(" ");
}

/*
alternate solution
*/
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}
