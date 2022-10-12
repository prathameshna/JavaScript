'use strict';

/*

///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this!
    // this.calcAge = function () {
    //   console.log(2022 - this.birthYear);
    // };
};


const pratham = new Person('Prathamesh', 1997);
console.log(pratham);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const vishakha = new Person('Vishakha', 1995);
const sujeet = new Person('Sujeet', 1988);

console.log(vishakha, sujeet);

console.log(pratham instanceof Person);

Person.hey = function () {
    console.log('Hey there :)');
    // console.log(this);
};
Person.hey();


///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

pratham.calcAge();
vishakha.calcAge();

console.log(pratham.__proto__);
console.log(pratham.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(pratham));
console.log(Person.prototype.isPrototypeOf(vishakha));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(pratham.species, vishakha.species);

console.log(pratham.hasOwnProperty('firstName'));
console.log(pratham.hasOwnProperty('species'));



///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

console.log(pratham.__proto__);
// Object.prototype (top of prototype chain)
console.log(pratham.__proto__.__proto__);
console.log(pratham.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.log(h1.__proto__); // HTMLHeadingElement
console.log(h1.__proto__.__proto__); // HTMLElement
console.log(h1.__proto__.__proto__.__proto__); // Element
console.log(h1.__proto__.__proto__.__proto__.__proto__); // Node
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // Object
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // null

console.dir(x => x + 1);

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.break = function () {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.break();
mercedes.accelerate();



///////////////////////////////////////
// ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration 
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2022 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2022 - this.birthYear;
    }

    // Set a property that already exits
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            alert(`${name} is not a full name!`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    // Static methods
    static hey() {
        console.log('Hey there :)');
        // console.log(this);
    }
};

const ankita = new PersonCl('Ankita Arote', 1997);
console.log(ankita);
ankita.calcAge();
console.log(ankita.age);

console.log(ankita.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };

ankita.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. CLass are executed in strict mode

const saurabh = new PersonCl('Saurabh Galande', 1991);
PersonCl.hey();


///////////////////////////////////////
// Setters and Getters
const account = {
    owner: 'Pratham',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);



///////////////////////////////////////
// Object.create

const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const prafulla = Object.create(PersonProto);
console.log(prafulla);
prafulla.name = 'Prafulla';
prafulla.birthYear = 1993;
prafulla.calcAge();

console.log(prafulla.__proto__ === PersonProto);

const vishakha = Object.create(PersonProto);
vishakha.init('Vishakha', 1995);
vishakha.calcAge();

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
};

const ford = new Car('Ford', 120);
console.log(ford.speedUS);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

*/

/*
///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const pratham = new Student('Prathamesh', 2001, 'Computer Science');
console.log(pratham);
pratham.introduce();
pratham.calcAge();

console.log(pratham.__proto__);
console.log(pratham.__proto__.__proto__);

console.log(pratham instanceof Student);
console.log(pratham instanceof Person);
console.log(pratham instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.break = function () {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.break();
tesla.accelerate();

*/

/*
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(
            `I'm ${ 2022 - this.birthYear} years old, but as a student feel more like ${2022 - this.birthYear + 10}`
        );
    }
}

const tanay = new StudentCl('Tanay Bugad', 2002, 'Computer Science');
tanay.introduce();
tanay.calcAge();


///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// Public fields
// Private fields
// Public Methods
// Private methods
// (there is also the static version)


class Account {
    // 1) Public field (instances)
    locale = navigator.language;

    // 2) Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currercy, pin) {
        this.owner = owner;
        this.currercy = currercy;
        // protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}.`);
    }

    // 3) Public methods

    // Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }


    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved`);
            return this;
        }
    }

    static helper(){
        console.log('Helper');
    }

    // 4) Private methods
    #approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Prathamesh', 'INR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1._approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#pin);
// console.log(acc1.#movements);
// console.log(acc1.#approveLoan(1000));

Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());


*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;

    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
      }

};

class EVCl extends CarCl{
    #charge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`
        );
        return this;
    }

    
};

const nexon = new EVCl('Nexon', 120, 23);
console.log(nexon);
nexon
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();