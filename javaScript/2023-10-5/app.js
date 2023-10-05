function smallEnough(a, limit) {
  //   return a.every(x => x <= limit);
  return a.every(element => element <= limit);
}

// alternate solution

function smallEnough(a, limit) {
  for (var i of a) {
    if (i > limit) return false;
  }
  return true;
}
