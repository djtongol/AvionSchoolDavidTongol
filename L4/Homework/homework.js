//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "Sleeping is integral in learning"

//create a number variable, it an be any number
const newNum = Math.floor(Math.random()*100);
console.log(newString);

//create a boolean variable
if(newNum < 70){
  console.log("wow taas naman");
}else{
  console.log("oks lang yan refresh mo naman");
};

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

//Example 1:
function returnString(str) {
let fullName= "David " + str
  return fullName;
}

console.log(returnString("Tongol"));

function add(x, y) {
  let sum= (x + y);
  return sum;
}

console.log("The sum is " + add(newNum,8));


function subtract(x, y) {
  let diff= (x - y);
  return diff;
}

console.log("The difference is " + subtract(newNum,3));

function multiply(x, y) {
   let product= (x * y);
  return product;
}

console.log("The product is " + multiply(newNum,4));

function divide(x, y) {
   let product= (x / y);
  return product;
}

console.log("The quotient is " + divide(newNum,2));

function areEqual(x, y) {
  if (x = y){ return true
}else{return false} 
}console.log(areEqual(newNum, newNum));



function areSameLength(str1, str2) {
  if(str1.length=== str2.length){
    return true;
  } else {
    return false
  }
}console.log(areSameLength("jack", "mark"));

function lessThanNinety(num) {
 if (num < 90){
   return console.log ("number less than 90")
 }else {
  return console.log("number greater than 90")
 }
}lessThanNinety(newNum);

function greaterThanFifty(num) {
  if (num > 50){
   return console.log ("number more than 50")
 }else {
  return console.log("number less than 50")
 }
}greaterThanFifty(newNum);


function getRemainder(x, y) {
  let remainder= x % y;
  return remainder
}console.log(getRemainder(13, 5));

function isEven(num) {
  if (num % 2===0){
    return console.log(num + " is even number");
  }else{
    return console.log(num + " is odd number");}
}console.log(isEven(newNum));

function isOdd(num) {
  if (num % 2!==0){
    return console.log(num + " is odd number");
  }else{
    return console.log(num + " is even number");}
}console.log(isOdd(newNum));

function square(num) {
  return num*num;
} console.log(square (newNum));

function cube(num) {
  return num*num*num;
} console.log(cube (newNum));

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
}console.log(raiseToPower(2, 5));

function roundNumber(num) {
 return Math.round(Math.random()*num);
}console.log(roundNumber(100));

function roundUp(num) {
 return Math.ceil(Math.random()*num);
}console.log(roundUp(100));

function addExclamationPoint(str) {
  return str + "!";
}console.log(addExclamationPoint(newString));

function combineNames(firstName, lastName) {
  return firstName +" " +lastName;
} console.log(combineNames("Jesus", "Chirst"));

function getGreeting(name) {
  return "Hello " + name;
}console.log(getGreeting("ben"));

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  return length * width;
}console.log(getRectangleArea(newNum, 5));

function getTriangleArea(base, height) {
   return (base * height)*.5;
}console.log(getTriangleArea(newNum, 5));

