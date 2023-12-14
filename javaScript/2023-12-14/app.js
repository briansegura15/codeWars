var countSheep = function (num) {
  if (num === 0) return "";
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};

// alternate solution

// when in doubt turn it into an array

function countSheep(num) {
  const arr = [];
  for (i = 1; i <= num; i++) {
    arr.push(i + " sheep...");
  }
  return arr.join("");
}
