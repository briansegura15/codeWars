function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let filteredList = birds.filter(e => !geese.includes(e));

  return filteredList;
}

// alternative solution

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  var newArray = [];
  for (var i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      newArray.push(birds[i]);
    }
  }
  return newArray;
}
