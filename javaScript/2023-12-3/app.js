function well(x) {
  const gw = "good";

  const filteredArr = x.filter(word => word === gw);

  if (filteredArr.length === 0) {
    return "Fail!";
  } else if (filteredArr.length <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}

// alternate solution

const well = x => {
  let count = x.filter(el => el == "good").length;
  return count > 2 ? "I smell a series!" : count > 0 ? "Publish!" : "Fail!";
};
