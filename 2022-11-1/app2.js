function vowelOne(s) {
  // change all elements to lowercase
  s = s.toLowerCase();
  //   establish what is a vowel
  const arr = ["a", "e", "i", "o", "u"];
  //   create a holder
  let result = "";
  //   iterate over parameter
  for (el of s) {
    // if an element of the argument is found in the vowel array add 1 to holder or 0 if not
    arr.includes(el) ? (result += "1") : (result += "0");
  }
  return result;
}

// alternate solution

function vowelOne(s) {
  let s1 = s.toLowerCase();
  let res = "";
  for (let i = 0; i < s1.length; i++) {
    if (
      s1[i] == "a" ||
      s1[i] == "e" ||
      s1[i] == "u" ||
      s1[i] == "i" ||
      s1[i] == "o"
    ) {
      res += "1";
    } else {
      res += "0";
    }
  }
  return res;
}
