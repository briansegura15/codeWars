const rps = (p1, p2) => {
  // create a winner holder
  let winner = null;
  //   switch around player 1 input
  switch (p1) {
    case "paper":
      if (p2 == "rock") winner = 1;
      else if (p2 == "scissors") winner = 2;
      break;
    case "rock":
      if (p2 == "scissors") winner = 1;
      else if (p2 == "paper") winner = 2;
      break;
    case "scissors":
      if (p2 == "paper") winner = 1;
      else if (p2 == "rock") winner = 2;
      break;
  }
  if (winner !== null) {
    // return statement of winner
    return "Player " + winner + " won!";
  }
  //   if no winner
  return "Draw!";
};

// alternate solution
const rps = (p1, p2) => {
  if (p1 == p2) return "Draw!";

  if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
  else if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
  else if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
  else return "Player 2 won!";
};
