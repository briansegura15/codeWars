var containsDuplicate = function (nums) {
  //   let sortedNums = nums.sort((a, b) => a - b);
  let set = new Set(nums);
  console.log(set);
  return set.size !== nums.length;
};

[1, 2, 3, 1];
console.log(containsDuplicate([1, 1, 3, 4, 2]));

// some sort
// index lastindexof
// use Set because its a super power use new
