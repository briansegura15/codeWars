function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here

  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Alternate solution

const goals = (...a) => a.reduce((s, v) => s + v, 0);
