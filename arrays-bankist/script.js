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

// Display the movements
const displayMovements = function(movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function(move, i) {
        const type = move > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${move}₱</div>
      </div>`;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

// Calcaulate balance and display balance
const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `₱${acc.balance}`;
};

// Display summary
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

// Create the user 
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

// Update the UI
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

        updateUi(currentAccount);

        console.log(`Account found, Successfully Log in`);
    } else {
        alert("Account not found!");    
        console.log(`Account not found!`);
    };

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
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
            alert("Insufficient funds");
            console.log('Insufficient funds');
        }
    } else {
        alert('Cannot transfer to this account');
        console.log('Cannot transfer to this account');
    };
});

// Request loan
btnLoan.addEventListener('click', function(e){
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUi(currentAccount);
    }
    inputLoanAmount.value = '';
});

// Close Account
btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(Number(inputClosePin.value) === currentAccount.pin && currentAccount.username === inputCloseUsername.value) {
        const validation = confirm("Do you want to delete this Account?");
        if(validation) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username);
            
            // Delete account
            accounts.splice(index, 1);

            console.log(accounts);

            // Hide UI
            containerApp.style.opacity = 0;
        } else {
            alert('Delete account unsuccessful');
        }
    } else {
        alert('Invalid!');
    };

    inputClosePin.value = inputCloseUsername.value = "";
});

// Sort
let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();

    /*
   My Version
    if(sorted) {
    sorted = false;
    displayMovements(currentAccount.movements, sorted);
   } else {
    sorted = true;
    displayMovements(currentAccount.movements, sorted);
   }
   */

   // Nice version
   displayMovements(currentAccount.movements, !sorted);
   sorted = !sorted;
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

// Some = check if it is in data Returns boolean
console.log(moveData);

// Equality
console.log(moveData.includes(-130));

// Condition
console.log(moveData.some(mov => mov === -130));

const anyDeposits = moveData.some(mov => mov > 0);

console.log(anyDeposits);

// Every = check if all data is similar Returns boolean
console.log(moveData.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(moveData.some(deposit));
console.log(moveData.every(deposit));
console.log(moveData.filter(deposit));

// Flat method
const accountsMovements = accounts.map(acc => acc.movements).flat().reduce((acc, move) => acc + move, 0);
const accMovFlatmap = accounts.flatMap(acc => acc.movements).reduce((acc, move) => acc + move, 0);
console.log(accountsMovements);
console.log(accMovFlatmap);

// Sorting Arrays
console.log(moveData);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending order
moveData.sort((a, b) => {
    if(a > b)
        return 1;
    if(a < b)
        return -1;
});

console.log('Ascending order');
console.log(moveData);

//Improvement
moveData.sort((a,b) => a-b);
console.log('Improved code Ascending order');
console.log(moveData);

// Descending order
moveData.sort((a, b) => {
    if(a > b)
        return -1;
    if(a < b)
        return 1;
});

console.log('Descending order')
console.log(moveData);

// Descending order
moveData.sort((a, b) => b-a);
console.log('Improved code Descending order')
console.log(moveData);


// array Fill method 
const arr = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

// Console.log(x.map(() => 5);
x.fill(1,3,5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

const randomDice = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
console.log(randomDice);

labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'), 
    el => Number(el.textContent.replace('₱', '')));
    console.log(movementsUI);
});

labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'), 
    el => Number(el.textContent.replace('₱', '')));
    console.log(movementsUI);
});
