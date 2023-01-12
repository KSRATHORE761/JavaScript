//sol 1 : using temp var
var x = 5;
var y = 10;
console.log("value of x before swappping :",x);
console.log("value of y before swappping :",y);
var temp = x;
x = y;
y = temp;
console.log("value of x after swappping :",x);
console.log("value of y after swappping :",y);


// sol 2: without using 3 third variable

var a = 5;
var b = 10;
console.log("value of a before swappping :",a);
console.log("value of b before swappping :",b);

a = a+b;
b = a-b;
a = a - b;

console.log("value of a after swappping :",a);
console.log("value of b after swappping :",b);

