function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      ascending = false;
    } else if (array[i] < array[i + 1]) {
      descending = false;
    }
    if (!ascending && !descending) {
      break;
    }
  }

  if (ascending) {
    return "yes, ascending";
  } else if (descending) {
    return "yes, descending";
  } else {
    return "no";
  }
}

// alternative solution

const isSortedAndHow = array => {
  let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
  let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;

  return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
};
