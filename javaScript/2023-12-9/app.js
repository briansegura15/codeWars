function addLineNumbers(lines) {
  return lines.reduce((result, line, index) => {
    result.push(`${index + 1}: ${line}`);
    return result;
  }, []);
}

// alternate solution

var number = function (array) {
  return array.map(function (line, index) {
    return index + 1 + ": " + line;
  });
};

// this is my first time sending an empty commit for the yummy green square
