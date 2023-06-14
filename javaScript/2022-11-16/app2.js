var capitals = function (word) {
  // Write your code here
  //   create an emtpy array holder
  let caps = [];
  //   loop thru array
  for (let i = 0; i < word.length; i++) {
    // if looping thru the array results in a capital version of an element
    if (word[i] === word[i].toUpperCase()) {
      // push that element to the empty array holder
      caps.push(i);
    }
  }
  //   return array of capitals
  return caps;
};
