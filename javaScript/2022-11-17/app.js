// Was not passing tests
function hello(name) {
  // takes the first element of the string and turns it into a capital then takes the rest of the string and turns it into lowercase
  const result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  //   use conditional statement to see if there is no name supplied
  if (!name) {
    return `Hello, World!`;
  } else {
    return `Hello, ${result}!`;
  }
}
