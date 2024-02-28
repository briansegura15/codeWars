class Class {
  static #foo = 42;

  static get foo() {
    return Class.#foo;
  }
}

// alternate solution
// na this da best