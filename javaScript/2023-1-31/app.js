function pipeFix(numbers) {
  let pipes = [];
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  for (let i = min; i <= max; i++) {
    pipes.push(i);
  }
  return pipes;
}

// Alternate solution

function pipeFix(numbers) {
  var first = numbers[0];
  var last = numbers[numbers.length - 1];

  var arr = [];
  for (var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}
