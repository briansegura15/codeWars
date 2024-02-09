function capitalize(s) {
  result = [];
  oddResult = [];
  s = s.split("");
  s.forEach((ele, index) => {
    if (index % 2 === 0) {
      result.push(ele.toUpperCase());
    } else {
      result.push(ele);
    }
  });

  s.forEach((ele, index) => {
    if (index % 2 !== 0) {
      oddResult.push(ele.toUpperCase());
    } else {
      oddResult.push(ele);
    }
  });

  let ans1 = result.join("");
  let ans2 = oddResult.join("");

  return [ans1, ans2];
}

// alternate solution

function capitalize(s) {
  const odd = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  const even = s
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join("");
  return [even, odd];
}
