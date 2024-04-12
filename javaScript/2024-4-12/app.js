function longest(s1, s2) {
  // your code

  const ans = new Set([...s1, ...s2]);

  let finalAns = [...ans];

  finalAns = finalAns.sort().join("");

  return finalAns;
}

// alternate answer

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
//  alternate alternate

function longest(s1, s2) {
  return (s1 + s2)
    .split("")
    .sort()
    .filter((a, b, c) => a !== c[b - 1])
    .join("");
}
