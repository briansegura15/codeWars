function countSheeps(arrayOfSheep) {
  let result = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) result++;
    return result;
  }
}

// apparently the curly braces i included make my answer incorrect? WTF
function countSheeps(arrayOfSheep) {
  var num = 0;
  for (var i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] == true) num++;
  return num;
}
