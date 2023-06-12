function reverseList(list) {
  return list.reverse();
}
// alternate solution

function reverseList(list) {
  var array = [];
  for (var i = list.length - 1; i >= 0; i--) {
    array.push(list[i]);
  }
  return array;
}
