class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  //YOUR CODE HERE...
  isWorthIt() {
    if (this.draft - this.crew * 1.5 > 20) {
      return true;
    } else {
      return false;
    }
  }
}

// alternate solution

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    return this.draft - 1.5 * this.crew > 20;
  }
}
