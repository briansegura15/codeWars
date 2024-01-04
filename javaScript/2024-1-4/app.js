function howMuchILoveYou(nbPetals) {
  switch ((nbPetals - 1) % 6) {
    case 1:
      return "a little";
    case 2:
      return "a lot";
    case 3:
      return "passionately";
    case 4:
      return "madly";
    case 5:
      return "not at all";
    default:
      return "I love you";
  }
}

// alternative solution

const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}
