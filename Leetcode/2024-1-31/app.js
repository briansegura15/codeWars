var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let complementPair = target - nums[i];

    if (hash[complementPair] !== undefined) {
      return [hash[complementPair], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
