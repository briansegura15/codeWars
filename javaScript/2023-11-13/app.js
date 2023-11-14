function dontGiveMeFive(start, end) {
  console.log(start, end);
  let result = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      result.push(i);
    }
  }
  return result.length;
}
