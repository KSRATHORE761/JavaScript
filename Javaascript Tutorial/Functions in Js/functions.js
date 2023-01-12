var ch = "This lecture is about the functions in Javascript : ";
console.log(ch);

// Function Definition;

function Sum(){
    var num1 = 2;
    var num2 = 2;
    console.log("Sum is : ", num1+ num2);

}
//Function calling; 
Sum();

console.log("Function Arguments vs Function Parameters : ");
var ans = `1. Function parameters are the values listed in the function definition
2. Function arguments are the actual values passed to the function`;
console.log(ans);


//Function with Arguments
console.log("");
console.log("");


var num1 = 2;
var num2 = 2;
function Multiply(a,b){
    console.log("Multiplication of "+a+" and "+b+" is : ",num1*num2);
}
Multiply();

console.log("");
console.log("");

//Function Expression : 
console.log("Function Expression : Create a function and assign it to a variable");

function Divide(a,b){
    return a/b;
}

var divideresult = Divide(10,2);
console.log("Division result :", divideresult);

//Anonymous Expression : 
console.log("");
console.log("Anonymous Expression :");
console.log("");
var funExp = function(a,b){
    return total = a+b;
}
console.log("Result of Anonymous Expression :",funExp(15,15));

