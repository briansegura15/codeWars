var topKfrequent = function (nums, k) {
  let hash = {};

  nums.forEach(num => {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  });

  const key = Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .map(ele => ele[0]);
  key.slice(0, k);
};
