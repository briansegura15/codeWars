// below we used the Set object to remove duplicate elements from an array. The Set object lets you store unique values of any type, whether primitive values or object references. Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
function distinct(a) {
  return [...new Set(a)];
}

// alternate solution
function distinct(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
