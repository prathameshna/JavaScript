'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice

console.log(arr.slice(2));
console.log(arr.slice(1, 3));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log(arr);

// splice

console.log(arr.splice(2));
console.log(arr);


// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join
console.log(letters.join(' - '));


const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('pratham'.at(0));
console.


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposied ${movement}`);
    } else {
        console.log(`Movement ${i + 1}:You withdraw ${Math.abs(movement)}`);
    }
}
console.log('---------- foreach ----------');
movements.forEach((movement, index) => {
    if (movement > 0) {
        console.log(`Movement ${index + 1}:You deposied ${movement}`);
    } else {
        console.log(`Movement ${index + 1}:You withdraw ${Math.abs(movement)}`);
    }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

*/

/*
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
    ['INR', 'Indian Rupee'],
]);

currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'INR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
    console.log(`${value}: ${value}`);
});
*/


///////////////////////////////////////////
// The Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*

const eurToUsd = 1.1;

const movementsUSD1 = movements.map(function (mov) {
    return mov * eurToUsd;
})

const movementsUSD2 = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD1);

const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * eurToUsd);
}

console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
    (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
);


console.log(movementsDescriptions);


///////////////////////////////////////////
// The Filter Method

const deposits = movements.filter(function (mov) {
    return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
    if (mov > 0) depositsFor.push(mov);
}

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);



///////////////////////////////////////////
// The Reduce Method

console.log(movements);

// accumulator
// const balance = movements.reduce(function (acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`);
//     return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balanceFor = 0;
for (const mov of movements) {
    balanceFor += mov;
}

console.log(balanceFor);

// Maximum vlaue
const max = movements.reduce((acc, mov) => {
    if (acc > mov)
        return acc;
    else
        return mov;
}, 0);

console.log(max);



///////////////////////////////////////
// The Magic of Chaining Methods

// PIPELINE
const eurToUsd = 1.1;
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

*/

// Data
const account1 = {
    owner: 'Prathamesh Nadhe',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Ankita Arote',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Saurabh Galande',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Tanay Bugad',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];


///////////////////////////////////////
// The Find Method
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);


/*

///////////////////////////////////////
// some and every
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


///////////////////////////////////////
// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);


///////////////////////////////////////
// Sorting Arrays

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);



///////////////////////////////////////
// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);


*/


