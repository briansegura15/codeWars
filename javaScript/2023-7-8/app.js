function bonusTime(salary, bonus) {
  // your code here
  if (bonus === true) {
    return `£${salary * 10}`;
  } else return `£${salary}`;
}

// Alternate solution

const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;
