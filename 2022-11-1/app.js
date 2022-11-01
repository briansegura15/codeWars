function setAlarm(employed, vacation) {
  if (employed && vacation) {
    return false;
  } else if (!employed && vacation) {
    return false;
  } else if (!employed && !vacation) {
    return false;
  } else if (employed && !vacation) {
    return true;
  }
}

// Alternate solution

const setAlarm = (employed, vacation) => employed && !vacation;
