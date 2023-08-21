// Data 1
const markMassHeight = [78, 1.69];
const johnMassHeight = [92, 1.95];

// Data 2
const markMassHeight2 = [95, 1.88];
const johnMassHeight2 = [85, 1.76];

function calculateBmi(mass, height){
    return mass / height ** 2;
};

function oneDecimal(toOneDec){
    return parseFloat(toOneDec).toFixed(2);
};

function compareBMI(mBMI, jBMI){
    return mBMI > jBMI;
};

// Data 1
const markBmi1 = calculateBmi(markMassHeight[0], markMassHeight[1]);
const johnBmi1 = calculateBmi(johnMassHeight[0], johnMassHeight[1]);
console.log('DATA 1');
console.log(`Marks BMI: ${oneDecimal(markBmi1)}`);
console.log(`Johns BMI: ${oneDecimal(johnBmi1)}`);

// Data 2
const markBmi2 = calculateBmi(markMassHeight2[0], markMassHeight2[1]);
const johnBmi2 = calculateBmi(johnMassHeight2[0], johnMassHeight2[1]);
console.log('DATA 2');
console.log(`Marks BMI: ${oneDecimal(markBmi2)}`);
console.log(`Johns BMI: ${oneDecimal(johnBmi2)}`);

// Data 1
const markHigherBMI = compareBMI(markBmi1, johnBmi1);
console.log(markHigherBMI + ' ' + `Data 1: ${markHigherBMI ? 'Marks BMI' + '(' + oneDecimal(markBmi1) + ')' + ' ' + 'is higher than Johns BMI' + '(' + oneDecimal(johnBmi1) + ')' : 'Marks BMI' + '(' + oneDecimal(markBmi1) + ')' + 'is lower than Johns BMI' + '(' + oneDecimal(johnBmi1) + ')'}`);

// Data 2
const markHigherBMI2 = compareBMI(markBmi2, johnBmi2);
console.log(markHigherBMI2 + ' ' + `Data 2: ${markHigherBMI2 ? 'Marks BMI' + '(' + oneDecimal(markBmi2) + ')' + ' ' + 'is higher than Johns BMI' + '(' + oneDecimal(johnBmi2) + ')' : 'Marks BMI' + '(' + oneDecimal(markBmi2) + ')' + 'is lower than Johns BMI' + '(' + oneDecimal(johnBmi2) + ')'}`);