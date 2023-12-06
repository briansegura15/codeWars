function fizzbuzz(n) {
  //declare the array variable
  var list = [];
  //declare for loop
  for (
    let i = 1;
    i <= n;
    i++ //When number is divisible by both 3 & 5
  ) {
    var num = "";
    if (i % 3 == 0 && i % 5 == 0) {
      num = "FizzBuzz";
      list.push(num);
    }
    //When a number is divisible by three only
    else if (i % 3 == 0) {
      num = "Fizz";
      list.push(num);
    }
    //When a number is divisible by five only
    else if (i % 5 == 0) {
      num = "Buzz";
      list.push(num);
    }
    //When a number isn't divisible by either
    else {
      num = i;
      list.push(i);
    }
  }
  // return the list
  return list;
}

// alternate solution

function fizzify(i) {
  if (i % 15 == 0) return "FizzBuzz";
  else if (i % 5 == 0) return "Buzz";
  else if (i % 3 == 0) return "Fizz";
  else return i;
}

// Return an array
function fizzbuzz(n) {
  var res = [];
  for (var i = 1; i <= n; ++i) res.push(fizzify(i));
  return res;
}
