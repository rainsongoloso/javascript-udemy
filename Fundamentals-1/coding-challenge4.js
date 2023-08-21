const acceptedBills = [50,300];
const bills = [275, 40, 430];

function calculateTip(bills){
    return tip =  bills >= acceptedBills[0] && bills <= acceptedBills[1] ? 15/100 * bills : 20/100 * bills;
};

function calculateTotalValue(tips, bills1){
    return tips + bills1;
};

for(let i = 0; i < bills.length; i++){
    console.log(`The bill was ${bills[i]}, the tip was ${calculateTip(bills[i])}, and the total value ${calculateTotalValue(calculateTip(bills[i]), bills[i])}`);
};