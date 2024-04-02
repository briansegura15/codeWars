function formatMoney(amount) {
  // your formatting code here

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // useGrouping: false,
  });
  //   console.log(amount)
  //   console.log(USDollar.format(amount

  return USDollar.format(amount);
}

console.log(formatMoney(148));
console.log(formatMoney(12348));
