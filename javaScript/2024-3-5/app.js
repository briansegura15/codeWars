class God {
  static create() {
    // code
    return [new Man(), new Woman()];
  }
}

class Human extends God {}

class Man extends Human {}
class Woman extends Human {}

// alternative solution
