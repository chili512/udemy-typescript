/**
 * Created by jonathan on 14/1/17.
 */
// Exercise 1 as arrow function
const double = (value) => value * 2;
console.log(double(10));
// Exercise 2 default params
const greeter = (name = "Max") => {
    console.log(`Hello ${name}`);
};
greeter();
greeter("Anna");
// Exercise 3 - Spread operator
let myNumbers = [-3, 33, 38, 5];
console.log(Math.min(...myNumbers));
// Exercise 4 - Spread operator
let numberArray = [55, 20];
numberArray.push(...myNumbers);
console.log(numberArray);
// Exercise 5 - Destructuring arrays
let testResults = [3.89, 2.99, 1.38];
const [r1, r2, r3] = testResults;
console.log(r1, r2, r3);
// Exercise 6 - Destructuring objects
let scientist = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
