function toNumberArray(stringarray) {
  // create a variable that will hold the answer
  // use the map method to iterate over every element and return it in number form
  const result = stringarray.map(e => {
    return Number(e);
  });
  //   return result variable
  return result;
}

// Alternate Solution
function toNumberArray(stringarray) {
  // create an emtpy array for result holder
  const result = [];
  //   use the forEach method to iterate over every element

  stringarray.forEach(e => {
    // push the element in Number form to the result array
    result.push(Number(e));
  });
  //   return result
  return result;
}
