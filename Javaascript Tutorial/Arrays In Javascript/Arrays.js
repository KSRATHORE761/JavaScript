// /** Javascripts Arrays :  */

// /** When we single value for single variable : */
// var friend1 = 'Kuldeep';
// var friend2 = 'Shanu';
// var friend3 = 'Mohit';
// var friend4 = 'Abhishek';
// var friend5 = 'Pardeep';



// /** Using array we can store multiple arrays in single varible */

// //var myFriends = ["Kuldeep","shanu","Mohit","Abhishek"];
// // or 
// //var myFriend = new Array(); // Not mandatory;


// /** Traversal In Array */

// var myFriends = ["Kuldeep","shanu","Mohit","Abhishek"];


// // Print element of array using index;
// // console.log(myFriends[1]);

// // Print element of array using for loop;

// for(let i = 0 ;i<myFriends.length;i++){
//     console.log(myFriends[i]);
// }


// // Print Elements of array using For in loop.......
// for(let friends in myFriends){
//     console.log(friends);
// }

// // Print Elements of array using For of loop.......
// for(let friends of myFriends){
//     console.log(friends);
// }

// // Print Elements of array using forEach loop.......

// myFriends.forEach(function(element, index, array){
//     console.log(element);
// });

// // Print Elements of array using forEach loop and Arrow Function.......

// console.log();
// console.log("Print Elements of array using forEach loop and Arrow Function: ");

// myFriends.forEach((element,index,array)=>{
//     console.log(element);
// });


// /** Search and Filter in Array  */

// console.log("Search and Filter in Array");

// console.log(myFriends.indexOf("Mohit",3));



// Last Indexof Method : 

// var myFriends = ["Kuldeep","shanu","Mohit","Abhishek","Kuldeep"];
// console.log(myFriends.lastIndexOf('Kuldeep'));


// Include Method : 
var myFriends = ["Kuldeep","shanu","Mohit","Abhishek","Kuldeepsssssssss"];
console.log(myFriends.includes('Kuldeeps'));

// Find Method 

const price = [100,200,300,400,500,600,700,800,900,1000];

// price > 400;

// const findele = price.find((element,index,array)=>{
// return element<400;
// });
// console.log(findele);

// Filter Function

// const newPriceTag = price.filter((element)=>element<400);
// console.log(newPriceTag);

// Arrays sorting 

const months = ['Jan','Feb','Mar','Apr','May'];
const monthInNumbers = [5,1,8,2,4,3,6,7]
console.log(months.sort());
console.log(monthInNumbers.sort());