function accum (s) {
    // use the spread operator to make s an array
    // use the map method to iterate over each element along with their index
	return [...s].map((element, index) => {
        // return the first element in uppercase and the rest lowercase according to which index the element is in
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}