function adjacentElementsProduct(array) {
  // max product
  let maxProduct = array[0] * array[1];

  for (let i = 1; i < array.length; i++) {
    let currentProduct = array[i] * array[i + 1];
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }
  return maxProduct;
}

// alternative solution

function adjacentElementsProduct(array) {
  let newArr = [];
  for (i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArr);
}
