function lineupStudents(students) {
  //your code here
  const array = students.split(" ");
  console.log(array);
  const sortedArr = array.sort((a, b) => b.length - a.length);
  console.log(sortedArr);

  return sortedArr;
}

console.log(lineupStudents("brian ann ai tim john zak"));
