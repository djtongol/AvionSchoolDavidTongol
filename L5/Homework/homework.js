const x= Math.floor(Math.random()*200);
const y= 100;


// Do not change any of the function names

//Example 1:
function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x >= y) {
    return x;
  } else {
    return y;
}
}console.log(getBiggest(x,y));  


 let languages=["Mandarin", "German","Spanish"]
 let randomizer =[Math.floor(Math.random()*3)];
 function greeting(language) {
if (language==="German"){
  return "Guten Tag!"
}else if(language==="Mandarin"){
  return "Ni Hao!"}
else if(language==="Spanish"){
  return "Hola!"
}else{return "Hello!"}
} console.log(greeting(languages[randomizer]));



function isTenOrFive(num) {
  if (num===10||5){
    return true;
  }else{
    return false;
  }
} console.log(isTenOrFive(x));

function isInRange(num) {
  if (num <50 && num >=20){
    return true;
  }else{
    return false;
  }
} console.log(isInRange(x));

  
function isInteger(num){
  if (Math.floor(num)===0){
    return false
  }else{ 
    return true
  }
  
  }console.log(isInteger(.3))


function fizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 ===0 && i% 5 ===0){
      console.log("FizzBuzz");
    }else if (i % 3 ===0){
     console.log("Fizz");
   }else if (i % 5 ===0){
     console.log("Buzz");
  }else{ console.log(i)}
  }
 }fizzBuzz(100);


 function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if ( num % i === 0) 
    return false;
  } return true; 
 
}

console.log(isPrime(6));
