function noOdds(values) {
  // Return all non-odd values
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      result.push(values[i]);
    }
  }
  return result;
}

//   alternate solution

function noOdds(values) {
  const result = [];
  values.forEach(num => {
    if (num % 2 === 0) {
      result.push(num);
    }
  });
}

// most elegant solution

var noOdds = values => values.filter(x => x % 2 === 0);
