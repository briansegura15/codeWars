var gimme = function (inputArray) {
  let index = 0;
  let max = Math.max(...inputArray);
  let min = Math.min(...inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== max && inputArray[i] !== min) {
      index = i;
    }
  }
  return index;
};

// alternate solution
var gimme = function (inputArray) {
    if ((inputArray[0] < inputArray[1] && inputArray[0] > inputArray[2])
      || (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2]))
      return 0;
      
    if ((inputArray[1] < inputArray[0] && inputArray[1] > inputArray[2])
      || (inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2]))
      return 1;
      
    if ((inputArray[2] < inputArray[0] && inputArray[2] > inputArray[1])
      || (inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1]))
      return 2;
  };