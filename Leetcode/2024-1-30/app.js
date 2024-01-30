var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const charCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++;
    charCount[t.charCodeAt(i) - 97]--;
  }

  return charCount.every(count => count === 0);
};

// my solution below Judys super solution above
var isAnagram = function (s, t) {
  s.length !== t.length ? false : true;

  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};
