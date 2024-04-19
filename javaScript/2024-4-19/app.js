class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return this.getDeets();
  }

  getDeets() {
    return `${this.name}s age is ${this.age}`;
  }
}

// alternate

class Person {
  constructor(name, age) {
    this.info = `${name}s age is ${age}`;
  }
}

// alternate 2

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = `${this.name}s age is ${this.age}`;
  }
}
