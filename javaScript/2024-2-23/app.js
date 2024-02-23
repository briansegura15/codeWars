class Person {
  // Get coding in ES6 :D
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  //   return full name accept no parameters
  sayFullName() {
    return this.firstName + " " + this.lastName;
  }

  //   static method 1 param

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}
