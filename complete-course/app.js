/**
 * Created by jonathan on 8/1/17.
 */
console.log("Works");
// atrings
let myname = 'jon';
// myname = 28;
// number
let mynumber = 28.5;
// mynumber = '';
// boolean
let hasHobbies = true;
// hasHobbies = 1;
// assign types
let myage;
myage = 27;
myage = '27';
// array
let hobbits = ["frodo", "bilbo"];
//hobbits = [100];
console.log(hobbits[0]);
console.log(typeof hobbits);
// tuples
let address = ["Super st", 99];
console.log(address);
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 9] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Blue;
console.log(myColor);
// any
let car = "BMW";
car = { bramd: "BMW", series: 4 };
console.log(car);
// functions
function returnMyName() {
    return myname;
}
console.log(returnMyName());
function sayHi() {
    console.log("Hello World");
}
sayHi();
// argument types
function multiple(v1, v2) {
    return v1 * v2;
}
console.log(multiple(10, 7));
// functions as types
// Order important
let myMultiply;
// myMultiply = sayHi;
// myMultiply();
myMultiply = multiple;
console.log(myMultiply(6, 4));
// objects - blueprint
let userData = {
    name: "Jon",
    age: 57
};
//userData = {};
// names important
//userData = {a: "Jel", b: 2};
console.log(typeof userData);
console.log(userData);
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex);
let complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
let myRealRealAge;
myRealRealAge = "27";
myRealRealAge = 27;
//myRealRealAge = true
// check types
let finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("Final");
}
// never type - does not finisg
function nerverReturns() {
    throw new Error('An error');
}
//nerverReturns();
// nullable = do not assign a null value
let canBeNull = 12;
//canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
console.log(canBeNull);
console.log(canAlsoBeNull);
// Can only be null
let canThiBeAny = null;
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.month += value;
    }
};
let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
console.log(myself);
let num;
num = 2;
let anything;
anything = 12;
// function controlMe(istrue: boolean, aomw:boolean):number {
//     let result: number;
//     if (istrue) {
//         result = 12;
//     }
//     return result;
// }
//
// console.log(controlMe(true, true));
// let and const
console.log("LET + CONST");
let variable = "Test"; // scope preferred
var vars = "Ts"; // global
console.log(variable);
const maxLevels = 100; // immutable data structure.
//maxLevels = 99; will not work
// block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(1, 2));
const multiplyNumbers = (n1, n2) => n1 * n2;
console.log(multiplyNumbers(2, 5));
const greet = () => {
    console.log("Priviet");
};
greet();
// passing an arg without () means cannot declare type
const gh = friend => console.log(friend);
gh("Hann");
const zz = (friend) => console.log(friend);
zz("Jon");
console.log("DEFAULT PARAMS");
const countDown = (start = 10) => {
    while (start > 0) {
        start--;
    }
    console.log("DONE", start);
};
countDown(1);
countDown();
console.log("REST + SPREAD");
// WORKING WITH LISTS AND ARRAYS
const numbers = [1, 10, 99, 1, -5];
console.log(Math.max(1, 99, 112, -3, 55));
// spread operator ... transfer arrays
console.log(Math.max(...numbers));
// rest
function makeArray(name, ...args) {
    return args;
}
// rest is about flex
console.log(makeArray("Mj", 1, 2, 6, 99, 112));
// destructuring arrays
console.log("DESTRUCTURING");
const myhobbies = ["Read", "Learn"];
console.log(myhobbies);
const [h1, h2] = myhobbies;
console.log(h1, h2);
const userdata = { un: "jo", age: 28 };
const { un: MyName, age: MyAge } = userdata;
console.log(MyAge, MyName);
//templare lterals
const uname = "Max";
const greeting = "Heelo i am ``" + uname;
console.log(greeting);
const message = `
This is a message from someone
who is here ${uname}
`;
console.log(message);
// symbols iterators es6 features
