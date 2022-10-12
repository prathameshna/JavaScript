
/*
// coding Challenge #1
let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI , johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); 



// coding Challenge #2

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;


if ( markBMI > johnBMI ){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}



// coding Challenge #3

let scoreDolphins = (97 + 112 + 101) / 3;
let scoreKoalas = (109 + 95 + 106) / 3;
console.log( scoreDolphins , scoreKoalas );

if( scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins wins the trophy.`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log(`Koalas wins the trophy.`);
} else if ( scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100 ) {
    console.log(`Both win the trophy.`);
} else {
    console.log(`No team wins the trophy.`);
}

*/

// coding Challenge #4

const bill = 275;

const tip = 300 >= bill && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total vaule was ${bill + tip}`);

