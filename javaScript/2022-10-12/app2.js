function greet(name, owner) {
  // Add code here
  //   if statement to check if name supplied is equal to name of boss
  if (name == owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// Alternate solution

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
