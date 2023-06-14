function friend(friends) {
  //use the filter method to iterate through every argument and test case
  //   return only the elements that are exactly 4 characters long

  return friends.filter(word => word.length === 4);
}

// alternate solution
function friend(friends) {
  return friends.reduce((res, x) => {
    if (x.length == 4) {
      res.push(x);
      return res;
    } else return res;
  });
}
