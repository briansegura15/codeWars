function isRubyComing(list) {
  // thank you for checking out my kata :)
  const stored = list.filter(el => el.language === "Ruby");

  return stored != 0;
}

function isRubyComing(list) {
  // thank you for checking out my kata :)
  const stored = list.some(el => el.language === "Ruby");

  return stored;
}

//   alternate solution

function isRubyComing(list) {
  return list.find(x => x.language == "Ruby") ? true : false;
}
