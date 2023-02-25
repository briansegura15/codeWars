function sayHello(name, city, state) {
  name = name.join(" ");
  return `Hello, ${name}! Welcome to ${city}, ${state}!`;
}

// alternate solution

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
