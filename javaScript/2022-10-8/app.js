function removeExclamationMarks(s) {
  // if the last element in the string is ! return the string with all elements except the last one, if not return string as is
  return s[s.length - 1] === "!" ? s.slice(0, s.length - 1) : s;
}
//   alternate solution

function removeExclamationMarks(s) {
  console.log(s.replace("!", ""));
  let res = s.replace("!", "");
  return res;
}
