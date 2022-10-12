'use strict';

/*
// coding Challenge #1

const avgScore = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}



function checkWinner(avgDolphins, avgKoalas) {
    if( avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas}).`
    }else if( avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins}).`
    }else {
        return 'No team wins!';
    }
}

const scoreDolphins = avgScore(85,54,41);
const scoreKoalas = avgScore(23,34,27);

console.log(checkWinner(scoreDolphins, scoreKoalas));


// coding Challenge #2


const calcTip1 = (bill) => {
    const tip = 300 >= bill && bill >= 50 ? bill * 0.15 : bill * 0.2;

    console.log(`The bill was ${bill}, the tip was ${tip}, and the total vaule was ${bill + tip}`);
}

// calcTip1(100);

const bills = [124, 555, 44];
let tips = new Array();
let total = new Array();

const calcTip = (bills) => {
    return 300 >= bills && bills >= 50 ? bills * 0.15 : bills * 0.2;
}

for( let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));  
}

for( let i = 0; i < bills.length; i++) {
    total.push((bills[i] + tips[i]));      
}

console.log(bills);
console.log(tips);
console.log(total);

for( let i = 0; i < bills.length; i++) {
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total vaule was ${total[i]}`);     
}


// coding Challenge #3


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 105,
    height: 1.95,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} both have same BMI ${mark.bmi}`);
}

*/


// coding Challenge #4


const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const total = [];

const calcTip = (bill) => {
    const tip = 300 >= bill && bill >= 50 ? bill * 0.15 : bill * 0.2;
    tips.push(tip);
    total.push(bill + tip);
}

for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
}

console.log(bills);
console.log(tips);
console.log(total);


const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let totals = sum / arr.length;
    console.log(`Average is ${totals}`);
}

calcAverage(total);
calcAverage(tips);
