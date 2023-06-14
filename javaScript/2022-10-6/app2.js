function findNeedle(haystack) {
  const result = haystack.indexOf("needle");
  return `found the needle at position ${result}`;
}
//  alternate solution
const findNeedle = haystack =>
  `found the needle at position ${haystack.indexOf("needle")}`;
