'use strict';

// Data
const acct1 = {
    owner: 'Rainson Goloso',
    movements: [862, -527, 323, 598, 384, -644, -833, 185, 661, 46],
    interestRate: 1.2,
    pin: 1111,
};

const acct2 = {
    owner: 'Jainel Goloso',
    movements: [872, 62, 558, -978, 185, 866, 612, -633, -309, -994],
    interestRate: 1.5,
    pin: 2222,
};

const acct3 = {
    owner: 'Painer Goloso',
    movements: [536, -296, -755, 617, 940, -979, 821, -169, 814, 951],
    interestRate: 0.9,
    pin: 3333,
};

const accounts = [acct1, acct2, acct3];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
    containerMovements.innerHTML = '';
    
    movements.forEach(function(move, i) {
        const type = move > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${move}₱</div>
      </div>`;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `₱${acc.balance}`;
};

const calcDisplaySummary = function(accs) {
    const incomes = accs.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}₱`;

    const outcomes = accs.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outcomes)}₱`;

    const interest = accs.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * accs.interestRate) / 100)
    .filter((int, i, arr) => {
        return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

    labelSumInterest.textContent = `${interest.toFixed(2)}₱`;
};

const createUsername = function(accs) {
    accs.forEach(function(ac) {
        ac.username = ac.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
};

createUsername(accounts);

const updateUi = function(acc){
    // Display movements
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};

// Login
let currentAccount;
// Find method
btnLogin.addEventListener('click', (e) => {
    // Prevent FORM from submitting
    e.preventDefault();

    currentAccount = accounts.find(accs => accs.username === inputLoginUsername.value);

    if(currentAccount?.pin === Number(inputLoginPin.value)){
        const movements = currentAccount.movements;

        labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        updateUi(currentAccount);

        console.log(`Account found, Successfully Log in`);
    } else {    
        console.log(`Account not found!`);
    };
});

// Transfer ammount
btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const currAccMove = currentAccount.movements;
    const recieverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();

    if(recieverAcc?.username !== currentAccount.username && recieverAcc){
        if(currentAccount.balance >= amount && amount > 0) {
            recieverAcc.movements.push(amount);
            currAccMove.push(-amount);
            console.log(currAccMove, recieverAcc.movements);
            console.log(`${amount} was Succesfully transfer to ${recieverAcc.owner}`);

            updateUi(currentAccount);
        } else {
            console.log('Insufficient funds');
        }
    } else {
        console.log('Cannot transfer to this account');
    };
});

// const euroToUsd = 1.1;

const moveData = acct1.movements;

// const movementsUsd = moveData.map (function (mov) {
//     return mov * euroToUsd;
// });

// const moveUsdArr = moveData.map(mov => mov * euroToUsd);

// console.log(moveData);
// console.log(`Not Arrow Function: ${movementsUsd}`);
// console.log(`Arrow Function: ${moveUsdArr}`);

// const movementsUSDfor = [];
// for (const mov of moveData) movementsUSDfor.push(mov * euroToUsd);

// console.log(movementsUSDfor);

// // Map = create new array
// const movementsDesriptions = moveData.map((mov, i) => 
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementsDesriptions);

// Filter
// const deposits = moveData.filter(function (mov) {
//     return mov > 0;
// });
// console.log(deposits);

// const depositsFor = [];
// for (const move of moveData) if (move > 0) depositsFor.push(move);
// console.log(depositsFor);

// const withdrawals = moveData.filter(mov => mov < 0);
// console.log(withdrawals);

// const withdrawalsFor = [];
// for (const move of moveData) if (move < 0) withdrawalsFor.push(move);
// console.log(withdrawalsFor);

// // Reduce

// console.log(moveData);
// const balance = moveData.reduce(function(acc, cur, i, arr){
//     console.log(`Iteration: ${i}: ${acc}`);
//     return acc + cur;
// }, 0);
// console.log(balance);

// // Reduce for loop
// let balance2 = 0;
// for (const move of moveData) balance2 += move;
// console.log(balance2);

// // Reduce arrow function
// const balance3 = moveData.reduce((acc, cur) => acc + cur, 0);
// console.log(balance3);

// Reduce finding maximum value
console.log(moveData);
const max = moveData.reduce((acc, move) => acc > move ? acc : move, moveData[0]);
console.log(max);

const account = accounts.find(acc => acc.owner === 'Rainson Goloso');
console.log(account);

// Find FOR OF loop
let acc;
for(const a of accounts) if(a.owner === 'Rainson Goloso') acc = a;
console.log(acc);