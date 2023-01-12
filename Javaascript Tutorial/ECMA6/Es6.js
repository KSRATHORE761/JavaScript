// // Write a program to to print table using template literals

// for(let num = 1; num<=10;num++){
//     let tableOf = 6;
//     console.log(` ${tableOf} * ${num} = ${tableOf*num}`);
// }


// // 2) Default Parameter : Allows named parameters to be initialized with default value

// function mult(a,b =5){
//     return a*b;
// }
// function multi(a=10,b){
//     return a*b;
// }
// console.log(mult(5));
// console.log(multi(5));

// 3) Fat arrow function

// Simple function declaration :
// function sum(){
//     let a = 5,b =6;
//     console.log(`The sum of two number is ${a+b}`);
// }



// Convert it into fat Arrow function :
//1)
// const sum = () =>{
//     let a =10, b=20;
//     return `The sum of two numbers is ${a+b}`
// }
//or
//2)
// const sum = () =>{
//     return `The sum of two numbers is ${(a=5)+ (b=100)}`
// }
//3
const sum = () => `The sum of two numbers is ${(a=5)+ (b=100)}`

console.log(sum());
