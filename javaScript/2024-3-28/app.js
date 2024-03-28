function stringy(size) {
  string = "1";
  for (var i = 0; i < size - 1; i++) {
    if (i % 2 == 0) string += "0";
    else string += "1";
  }
  return string;
}

// alternate sollution

function stringy(size) {
  var arr = [];

  for (var i = 0; i < size; i++) {
    if (i % 2 == 0) {
      e = "1";
      arr.push(e);
      //       console.log(e);
    } else {
      e = "0";
      arr.push(e);
      //       console.log(e);
    }
  }

  return arr.join("");
}
