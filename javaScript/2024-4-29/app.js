function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

//   alternate solution
const openOrSenior = data => {
  let getOpenOrSenior = [];
  for (i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      getOpenOrSenior.push("Senior");
    } else {
      getOpenOrSenior.push("Open");
    }
  }
  return getOpenOrSenior;
};
// alternate solution
function openOrSenior(data) {
  var result = [];
  data.forEach(function (member) {
    if (member[0] >= 55 && member[1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  });
  return result;
}
