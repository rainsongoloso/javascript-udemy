const bills = [125, 555, 44];
const tips = [];
const total = [];

// Calculate tip
function calculateTip(bills){
    const acceptedBills = [50,300];
    return bills >= acceptedBills[0] && bills <= acceptedBills[1] ? 15/100 * bills : 20/100 * bills;
};

// Insert tips values in array tips
for(let i1 = 0; i1 < bills.length; i1++){
    tips.push(calculateTip(bills[i1]));
};
console.log(`Tips: ${tips}`);

// Calculate Total value
function calculateTotalValue(tips, bills1){
    return tips + bills1;
};

// Insert total values in array total
for(let i2 = 0; i2 < bills.length; i2++){
    total.push(calculateTotalValue(tips[i2], bills[i2]));
};
console.log(`Totals: ${total}`);

// Display
for(let i = 0; i < bills.length; i++){
    console.log(`The bill was ${bills[i]}, the tip was ${calculateTip(bills[i])}, and the total value ${calculateTotalValue(calculateTip(bills[i]), bills[i])}`);
};