let number = function (busStops) {
  // create a holder for people
  let totalPeople = 0;
  //   walk thru the array
  for (let i = 0; i < busStops.length; i++) {
    //
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};
