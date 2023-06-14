function updateLight(current) {
  switch (current) {
    case "green":
      return (current = "yellow");
      break;
    case "yellow":
      return (current = "red");
      break;
    case "red":
      return (current = "green");
      break;
  }
}

// Alternate solution

function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}
