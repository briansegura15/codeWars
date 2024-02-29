var Ghost = function () {
  // your code goes here

  let options = ["white", "yellow", "purple", "red"];

  let colorSelect = Math.floor(Math.random() * options.length);

  this.color = options[colorSelect];
};

// alternate solution

class Ghost {
  constructor() {
    this.colors = ["white", "yellow", "purple", "red"];
  }
  get color() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
