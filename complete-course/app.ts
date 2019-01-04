/**
 * Created by jonathan on 8/1/17.
 */
console.log("Works");
// atrings
let myname: string = 'jon';
// myname = 28;

// number
let mynumber: number = 28.5;
// mynumber = '';

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// assign types
let myage: any;
myage = 27;
myage = '27';

// array
let hobbits: any[] = ["frodo", "bilbo"];
//hobbits = [100];
console.log(hobbits[0]);
console.log(typeof hobbits);

// tuples
let address: [string, number] = ["Super st", 99];
console.log(address)

// enums
enum Color {
    Gray, Green = 9, Blue
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";

car = {bramd: "BMW", series: 4};
console.log(car);

// functions
function returnMyName(): string {
    return myname;
}
console.log(returnMyName());

function sayHi(): void {
    console.log("Hello World");
}
sayHi();

// argument types
function multiple(v1: number, v2: number): number {
    return v1 * v2;
}

console.log(multiple(10, 7));

// functions as types
// Order important
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHi;
// myMultiply();
myMultiply = multiple;
console.log(myMultiply(6, 4));

// objects - blueprint
let userData: {name: string, age: number} = {
    name: "Jon",
    age: 57
};

//userData = {};
// names important
//userData = {a: "Jel", b: 2};

console.log(typeof userData);
console.log(userData);

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

console.log(complex);

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types

let myRealRealAge: number|string;
myRealRealAge = "27";
myRealRealAge = 27;
//myRealRealAge = true

// check types
let finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("Final")
}

// never type - does not finisg
function nerverReturns(): never {
    throw new Error('An error')
}

//nerverReturns();

// nullable = do not assign a null value
let canBeNull: number|null = 12;
//canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null
console.log(canBeNull);
console.log(canAlsoBeNull);
// Can only be null
let canThiBeAny = null;
//canThiBeAny = 12;

type BankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void{
        this.month += value;
    }
}

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

console.log(myself);

let num: number;
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
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};

console.log(addNumbers(1, 2));

const multiplyNumbers = (n1: number, n2: number) => n1 * n2;
console.log(multiplyNumbers(2, 5));

const greet = () => {
    console.log("Priviet");
}
greet();
// passing an arg without () means cannot declare type
const gh = friend => console.log(friend);
gh("Hann");
const zz = (friend: string) => console.log(friend);
zz("Jon");

console.log("DEFAULT PARAMS");
const countDown = (start: number = 10): void => {
    while (start > 0) {
        start--;
    }
    console.log("DONE", start)
}
countDown(1);
countDown();

console.log("REST + SPREAD");
// WORKING WITH LISTS AND ARRAYS
const numbers = [1, 10, 99, 1, -5];
console.log(Math.max(1, 99, 112, -3, 55));
// spread operator ... transfer arrays
console.log(Math.max(...numbers));
// rest
function makeArray(name: string, ...args: number[]) {
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

const userdata = {un: "jo", age: 28};
const {un: MyName, age: MyAge} = userdata;
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

