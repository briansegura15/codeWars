// write the function isAnagram
var isAnagram = function (test, original) {
  let arr1 = test.toLowerCase().split("").sort().join("").toLowerCase();
  let arr2 = original.toLowerCase().split("").sort().join("").toLowerCase();

  return arr1 === arr2;
};

// alternate solution

// write the function isAnagram
function isAnagram(str1, str2) {
  return sortWord(str1) == sortWord(str2);
}

function sortWord(word) {
  return word.toLowerCase().split("").sort().join("");
}
