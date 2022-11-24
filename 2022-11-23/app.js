String.prototype.toJadenCase = function () {
  // use key word this to work on this function
  // split string into array of words
  return (
    this.split(" ")
      //   return a new array of words with each character at 0 in uppercase
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ")
  );
};
