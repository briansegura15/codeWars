function validatePIN(pin) {
  //return true or false
  const pattern = /^\d{4}$|^\d{6}$/;

  return pattern.test(pin);
}

// alternate solution
function validatePIN(pin) {
  //return true or false
  var n = pin.length;
  if (n != 4 && n != 6) return false;
  for (var i in pin) if (pin[i] > "9" || pin[i] < "0") return false;
  return true;
}
