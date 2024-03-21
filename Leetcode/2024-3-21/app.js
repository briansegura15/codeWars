const firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);
  let smallestPos = 1;

  for (const num of nums) {
    if (num <= smallestPos) {
      if (num === smallestPos) {
        smallestPos++;
      }
    } else {
      return smallestPos;
    }
  }

  return smallestPos;
};

// alternate solution

// function firstMissingPositive(nums) {
//   let hashMap = new Map();

//   for (let num of nums) {
//     hashMap.set(num, true);
//   }

//   let i = 1;
//   while (true) {
//     if (!hashMap.has(i)) {
//       return i;
//     }
//     i++;
//   }
// }
const array = [1, 2, 4, 6, 7, 10];
console.log(firstMissingPositive(array));
