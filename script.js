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
const array1 = [];
const array2 = [];
const sumArray = [];
const size = parseInt(prompt("Enter the size of arrays: "));
console.log("Enter the values of array 1");
for(let i = 0; i < size; i++){
    const row = [];
    for(let j = 0; j < size; j++){
        const value = Number(prompt(`Enter [${i}][${j}] value: `));
        row.push(value);
    }
    array1.push(row);
}
console.log("Enter the values of array 2");
for(let i = 0; i < size; i++){
    const row = [];
    for(let j = 0; j < size; j++){
        const value = Number(prompt(`Enter [${i}][${j}] value: `));
        row.push(value);
    }
    array2.push(row);
}
for(let i = 0; i < size; i++){
    const row = [];
    for(let j = 0; j < size; j++){
        const value = array1[i][j] + array2[i][j];
        row.push(value);
    }
    sumArray.push(row);
}
console.log("Sum of 2 arrays is:");
for(let i = 0;i < size; i++){
    console.log(sumArray[i].join(" "));
}

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

//18
// const writtenTest = parseFloat(prompt("Enter the marks for Written test: "));
// const labExams = parseFloat(prompt("Enter the marks for Lab exams: "));
// const assignments = parseFloat(prompt("Enter the marks for Assignments: "));
// const grade = (writtenTest * 0.70) + (labExams * 0.20) + (assignments * 0.10);

// console.log("Grade of the student is: " + grade.toFixed(1));

//19
// const income = parseFloat(prompt("Enter the annual income :"));

// let tax = 0;

// if (income <= 250000) {
//   tax = 0;
// } else if (income <= 500000) {
//   tax = income * 0.05;
// } else if (income <= 1000000) {
//   tax = income * 0.20;
// } else if (income <= 5000000) {
//   tax = income * 0.30;
// }

// console.log("Income tax amount = " + tax.toFixed(2));

//20
// let k = 1;
// for(let i = 1;i <= 4;i++){
//     let text = "";
//     for(let j = 1;j <= i;j++){
//         text += k + " "; 
//         k++;
//     }
//     console.log(text);
// }

//21
// const limit = parseInt(prompt("Enter the array limit: "));
// let arr = [];

// for (let i = 0; i < limit; i++) {
//   arr[i] = parseInt(prompt("Enter element " + (i + 1)+": "));
// }

// let result = [];
// for (let i = 0; i < arr.length - 1; i++) {
//   result[i] = arr[i] * arr[i + 1];
// }

// console.log("Output: ");
// console.log(result.join("\t"));

//22
// // Declare arrays globally so all functions can access
// let array1 = [];
// let array2 = [];
// let sumArray = [];
// let size = 0;

// // Function to get arrays
// function getArray() {
//   size = parseInt(prompt("Enter the size of array"));
//   // Get Array 1
//   console.log("Enter the values of array 1");
//   for (let i = 0; i < size; i++) {
//     array1[i] = [];
//     for (let j = 0; j < size; j++) {
//       array1[i][j] = parseInt(prompt(`Array 1 [${i}][${j}]:`));
//     }
//   }
//   // Get Array 2
//   console.log("Enter the values of array 2");
//   for (let i = 0; i < size; i++) {
//     array2[i] = [];
//     for (let j = 0; j < size; j++) {
//       array2[i][j] = parseInt(prompt(`Array 2 [${i}][${j}]:`));
//     }
//   }
// }
// // Function to add arrays
// function addArray() {
//   for (let i = 0; i < size; i++) {
//     sumArray[i] = [];
//     for (let j = 0; j < size; j++) {
//       sumArray[i][j] = array1[i][j] + array2[i][j];
//     }
//   }
// }
// // Function to display result
// function displayArray() {
//   console.log("Sum of array 1 and array 2:");
//   for (let i = 0; i < size; i++) {
//     let row = "";
//     for (let j = 0; j < size; j++) {
//       row += sumArray[i][j] + "\t";
//     }
//     console.log(row);
//   }
// }
// // Main function
// function main() {
//   getArray();
//   addArray();
//   displayArray();
// }
// // Run the main function
// main();

//23
// // Define Matrix class
// class Matrix {
//   constructor() {
//     this.size = 0;
//     this.array = [];
//   }
//   // Method to get array values
//   getArray() {
//     this.size = parseInt(prompt("Enter the size of array: "));
//     console.log("Enter the array values: ");
//     for (let i = 0; i < this.size; i++) {
//       this.array[i] = [];
//       for (let j = 0; j < this.size; j++) {
//         this.array[i][j] = parseInt(prompt(`Element [${i}][${j}]: `));
//       }
//     }
//   }
//   // Method to display array values
//   displayArray() {
//     console.log("Array elements are: ");
//     for (let i = 0; i < this.size; i++) {
//       let row = "";
//       for (let j = 0; j < this.size; j++) {
//         row += this.array[i][j] + "\t";
//       }
//       console.log(row);
//     }
//   }
// }
// // Main function
// function main() {
//   const matrix = new Matrix();
//   matrix.getArray();
//   matrix.displayArray();
// }
// // Run main
// main();

//24
// // Parent class Area
// class Area {
//   circle(radius) {
//     const area = 3.14 * radius * radius;
//     console.log(`Area of the circle is: ${area.toFixed(2)}`);
//   }

//   square(length) {
//     const area = length * length;
//     console.log(`Area of the square is: ${area.toFixed(2)}`);
//   }

//   rectangle(length, width) {
//     const area = length * width;
//     console.log(`Area of the rectangle is: ${area.toFixed(2)}`);
//   }

//   triangle(base, height) {
//     const area = 0.5 * base * height;
//     console.log(`Area of the triangle is: ${area.toFixed(2)}`);
//   }
// }

// // Child class MyClass extends Area
// class MyClass extends Area {
//   main() {
//     console.log("");
//     const choice = prompt("Select a choice from below list: \n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\nEnter your choice: ");

//     switch (choice) {
//       case "1":
//         const radius = parseFloat(prompt("Enter the radius:"));
//         this.circle(radius);
//         break;

//       case "2":
//         const length = parseFloat(prompt("Enter the length:"));
//         this.square(length);
//         break;

//       case "3":
//         const rectLength = parseFloat(prompt("Enter the length:"));
//         const rectWidth = parseFloat(prompt("Enter the width:"));
//         this.rectangle(rectLength, rectWidth);
//         break;

//       case "4":
//         const base = parseFloat(prompt("Enter the base:"));
//         const height = parseFloat(prompt("Enter the height:"));
//         this.triangle(base, height);
//         break;

//       default:
//         console.log("Invalid choice!");
//     }
//   }
// }

// // Create object and run the main function
// const obj = new MyClass();
// obj.main();

//25
// var library = [ 
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         readingStatus: true
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];

// for (let i = 0; i < library.length; i++) {
//     const book = library[i];
//     if (book.readingStatus) {
//         console.log(`Already read '${book.title}' by ${book.author}.`);
//     } else {
//         console.log(`You still need to read '${book.title}' by ${book.author}.`);
//     }
// }

//26
// //let my_string = "1234";
// //let my_string = Number(123);

// try {
//   const reversed = my_string.split('').reverse().join('');
//   console.log(`Reversed string is : ${reversed}`);
// } catch(err) {
//   console.log(`Error : ${err.message}`);
// } finally {
//   console.log(`Type of my string is : ${typeof my_string}`);
// }

//27
// // Example inputs:
// // let my_height = "seven"; // Sample Input 0
// // let my_height = 77;      // Sample Input 1
// // let my_height = 0;       // Sample Input 2
// // let my_height = 8;       // Sample Input 3

// try {
//     if (isNaN(my_height)) {
//         throw new Error("notANumberError");
//     }
//     if (my_height > 50) {
//         throw new Error("hugeHeightError");
//     }
//     if (my_height < 5) {
//         throw new Error("tinyHeightError");
//     }
//     console.log(my_height);
// } catch (err) {
//     console.log(err.message);
// }

//28
// function Car(name, mileage, max_speed) {
//   this.name = name;
//   this.mileage = mileage;
//   this.max_speed = max_speed;
// }

// let myCar = new Car("Toyota Corolla", 18, 180);

// console.log(myCar.name);
// console.log(myCar.mileage);
// console.log(myCar.max_speed);

//29
// function myFilter(myArray, callback) {
//   let sum = 0;
//   for(let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
//   }
//   const isEven = callback(sum);
//   console.log(`Sum is ${sum} (${isEven ? "even" : "odd"})`);
//   return sum;
// }

// function isSumEven(sum) {
//   return sum % 2 === 0;
// }

// let num = "1234";
// let digits = num.split("").map(Number);
// let result = myFilter(digits, isSumEven);
// console.log(result);


