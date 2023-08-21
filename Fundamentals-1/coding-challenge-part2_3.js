const markMiller = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

const johnSmith = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

function oneDecimal(toOneDec){
    return parseFloat(toOneDec).toFixed(2);
};

function compareBMI(mBMI, jBMI){
    if(mBMI > jBMI){
        return `${markMiller.fullName()}'s BMI (${oneDecimal(mBMI)}) is higher than ${johnSmith.fullName()}'s BMI (${oneDecimal(jBMI)})`;
    } else if(jBMI > mBMI){
        return `${johnSmith.fullName()}'s BMI (${oneDecimal(jBMI)}) is higher than ${markMiller.fullName()}'s BMI (${oneDecimal(mBMI)})`;
    } else {
        return `${markMiller.fullName()}'s BMI (${oneDecimal(mBMI)}) and ${johnSmith.fullName()}'s BMI (${oneDecimal(jBMI)}) are the same`;
    }
};

const mmBMI = markMiller.calcBMI();
const jsBMI = johnSmith.calcBMI();

const result = compareBMI(mmBMI, jsBMI);
console.log(result);