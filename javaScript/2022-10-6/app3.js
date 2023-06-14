function rentalCarCost(d) {
  // Your solution here
  let costPerDay = 40;
  let totalCost = costPerDay * d;

  if (d >= 7) {
    totalCost -= 50;
  } else if (d >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

// Alternate solution
function rentalCarCost(days) {
  var dayCost = 40;

  var discount = 0;
  if (days >= 3) discount += 20;
  if (days >= 7) discount += 30;

  return dayCost * days - discount;
}
