function hero(bullets, dragons) {
  //Get Coding!
  return dragons * 2 <= bullets ? true : false;
}

// alternate solution

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
