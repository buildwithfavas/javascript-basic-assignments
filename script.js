const prompt = require('prompt-sync')();

//1
// const character = prompt("Enter a character");
// console.log(character);

//2
// const num1 = parseInt(prompt("Enter the first number"));
// const num2 = parseFloat(prompt("Enter the second number"));
// console.log(num1+num2);

//3
// const p = parseInt(prompt("Enter the principle amount:"));
// const r = parseInt(prompt("Enter the intrest rate:"));
// const n = parseInt(prompt("Enter the number of years:"));
// const si = ((p*r*n)/100);
// console.log(si);

//4
// const mark = parseFloat(prompt("Enter your mark:"));
// if(mark>=50){
//     console.log("Passed");
// }else{
//     console.log("Failed");
// }

//5
// const totalMark = parseFloat(prompt("Enter your total marks:"));
// let grade;
// if(totalMark >= 90){
//     grade="A";
// }else if(totalMark >= 80 && totalMark<=89){
//     grade="B";
// }else if(totalMark >= 70 && totalMark<=79){
//     grade="C";
// }else if(totalMark >= 60 && totalMark<=69){
//     grade="D";
// }else if(totalMark >= 50 && totalMark<=59){
//     grade="E";
// }else if(totalMark<=50){
//     grade="Failed";
// }
// console.log(grade);

//6
// const numDay = parseInt(prompt("Enter number for the day:"));
// switch (numDay) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Entry");
// }

//7
// const num = prompt("Enter a number:");
// for(let i = 1;i <= 10;i++){
//     console.log(i + " x " + num + " = "+ (i * num));
// }

//8
// let sum = 0;
// const num = prompt("Enter a number:");
// for(let i = 1;i <= num;i += 2){
//     sum += i;
// }
// console.log("Sum of odd numbers = "+sum);

//9
// for(let i = 1;i <= 5;i++){
//     let text = "";
//     for(let j = 1;j <= i;j++){
//         text += j + " "; 
//     }
//     console.log(text);
// }

//10
// let size;
// let array1 = [];
// let array2 = [];

// size = parseInt(prompt("Enter the size of arrays:"));
// console.log("Enter the values of array1:");
// for(let i=0;i<size;i++){
//     let value = prompt(`Enter value ${i+1} of array1: `);
//     array1.push(value);
// }

// console.log("Enter the values of array2:");
// for(let i=0;i<size;i++){
//     let value = prompt(`Enter value ${i+1} of array2: `);
//     array2.push(value);
// }
// const tempArray = array1;
// array1 = array2;
// array2 = tempArray;

// console.log("Arrays after swapping:");
// console.log("Array1: ", array1.join(", "));
// console.log("Array2: ", array2.join(", "));

//11
// let arr=[];
// let evenCount=0;
// const size = prompt("Enter the size of the array: ");
// console.log("Enter the values of the array");
// for(let i = 0;i < size;i++){
//    let val = prompt(`Enter the value ${i+1} of the array: `);
//    arr.push(val);
// }

// for(let i = 0;i < size;i++){
//    if(arr[i]%2 === 0) evenCount++;
// }

// console.log("Number of even numbers in the given array is " + evenCount);

//12
// let arr=[];
// const size = prompt("Enter the size of the array: ");
// console.log("Enter the values of the array");
// for(let i = 0;i < size;i++){
//    let val = parseInt(prompt(`Enter the value ${i+1} of the array: `));
//    arr.push(val);
// }

// for(let i = 0; i < size-1; i++){
//     for(let j = i+1; j < size; j++){
//         if(arr[i] < arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr.join(", "));

//13
// const word = prompt("Enter a string: ");
// let i = 0;
// let j = word.length-1;
// let flag = true;
// while(i < j){
//     if(word[i] !== word[j]){    //word uppercase and lowercase matters.
//         flag = false;
//         break;
//     }
//     i++;
//     j--;
// }
// if(flag){
//     console.log(word +" is palindrome");
// }else{
//     console.log(word +" is not palindrome");
// }

//14
// const array1 = [];
// const array2 = [];
// const sumArray = [];
// const size =parseInt(prompt("Enter the size of arrays: "));
// console.log("Enter the values of array 1");
// for(let i = 0; i < size; i++){
//     const row = [];
//     for(let j = 0; j < size; j++){
//         const value = Number(prompt(`Enter [${i}][${j}] value: `));
//         row.push(value);
//     }
//     array1.push(row);
// }
// console.log("Enter the values of array 2");
// for(let i = 0; i < size; i++){
//     const row = [];
//     for(let j = 0; j < size; j++){
//         const value = Number(prompt(`Enter [${i}][${j}] value: `));
//         row.push(value);
//     }
//     array2.push(row);
// }
// for(let i = 0; i < size; i++){
//     const row = [];
//     for(let j = 0; j < size; j++){
//         const value = array1[i][j] + array2[i][j];
//         row.push(value);
//     }
//     sumArray.push(row);
// }
// console.log("Sum of 2 arrays is:");
// for(let i = 0;i < size; i++){
//     console.log(sumArray[i].join(" "));
// }

//15
// function getArray(size){
//     const arr=[];
//     for(let i = 0;i < size; i++){
//         const val = Number(prompt(`Enter value to ${i+1} position: `));
//         arr.push(val);
//     }
//     return arr;
// } 

// function displayArray(arr){
//     console.log(arr.join(", "));
// }  

// function main(){
//     let arr = [];
//     const size = parseInt(prompt("Enter the size of array: "));
//     arr = getArray(size);
//     displayArray(arr);
// }

// main();

//16
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const number = parseInt(prompt("Enter a number: "));

// if (isPrime(number)){
//   console.log("Entered number is a Prime number.");
// } else {
//   console.log("Entered number is not a Prime number.");
// }

//17
// class Calculator {
//   addition(a, b) {
//     return a + b;
//   }
//   subtraction(a, b) {
//     return a - b;
//   }
//   multiplication(a, b) {
//     return a * b;
//   }
//   division(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero.";
//     }
//     return a / b;
//   }
// }

// function main() {
//   const calc = new Calculator();
//   console.log("Choose an operation:");
//   console.log("1. Addition");
//   console.log("2. Subtraction");
//   console.log("3. Multiplication");
//   console.log("4. Division");

//   const choice = parseInt(prompt("Enter your choice (1-4): "));

//   const num1 = Number(prompt("Enter first number: "));
//   const num2 = Number(prompt("Enter second number: "));

//   let result;
//   switch (choice) {
//     case 1:
//       result = calc.addition(num1, num2);
//       console.log(`Result: ${result}`);
//       break;
//     case 2:
//       result = calc.subtraction(num1, num2);
//       console.log(`Result: ${result}`);
//       break;
//     case 3:
//       result = calc.multiplication(num1, num2);
//       console.log(`Result: ${result}`);
//       break;
//     case 4:
//       result = calc.division(num1, num2);
//       console.log(`Result: ${result}`);
//       break;
//     default:
//       console.log("Invalid choice.");
//   }
// }

// main();

