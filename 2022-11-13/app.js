function sumMix(x) {
  return x
    .map(e => {
      return Number(e);
    })
    .reduce((curV, preV) => {
      return curV + preV;
    });
}
