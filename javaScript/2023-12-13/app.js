const myLanguages = results =>
  Object.entries(results)
    .filter(([name, points]) => points >= 60)
    .sort(([name1, points1], [name2, points2]) => points2 - points1)
    .map(([name, points]) => name);

// alternative solution

function myLanguages(results) {
  let arr = [];
  for (let key in results) {
    if (results[key] >= 60) {
      arr.push(key);
    }
  }
  return arr.sort((a, b) => results[b] - results[a]);
}
