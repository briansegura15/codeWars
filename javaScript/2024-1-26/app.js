function createPhoneNumber(numbers) {
  let areaCode = `(${numbers[0]}${numbers[1]}${numbers[2]})`;
  let middleThree = `${numbers[3]}${numbers[4]}${numbers[5]}-`;
  let lastThree = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  return `${areaCode} ${middleThree}${lastThree}`;
}

// alternate solution

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
