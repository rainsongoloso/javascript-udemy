const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// Calculate tip
function calculateTip(bills) {
  const acceptedBills = [50, 300];
  const tip =
    bills >= acceptedBills[0] && bills <= acceptedBills[1]
      ? (15 / 100) * bills
      : (20 / 100) * bills;
  return tip;
}

// Calculate average
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Insert values
function insertValues(bills1) {
  for (let i1 = 0; i1 < bills1.length; i1++) {
    const tip = calculateTip(bills[i1]);
    tips.push(tip);
    totals.push(tip + bills1[i1]);
  }
}

insertValues(bills);
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);

// Display
for (let i = 0; i < bills.length; i++) {
  console.log(
    `The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`
  );
}

const billsAverage = calcAverage(bills);
const tipsAverage = calcAverage(tips);
const totalsAverage = calcAverage(totals);
console.log(`Bills ave: ${billsAverage}`);
console.log(`Tips ave: ${tipsAverage}`);
console.log(`Totals ave: ${totalsAverage}`);
console.log(`TOTALS: ${totals}`);
