/** 
What is truthy and falsy in js?
In js we have total 5 falsy values : 
0,"",undefined,NaN,null, false** is already faly 
**/

if(score=0){
    console.log("OMG!, we loss the game 😢 ");
}
else{
    console.log("Yeah!, we won the game 😍👏👏 ");
}

if(0){
    console.log("OMG!, we loss the game 😢 ");
}
else{
    console.log("Yeah!, we won the game 😍👏👏 ");
}

if(""){
    console.log("OMG!, we loss the game 😢 ");
}
else{
    console.log("Yeah!, we won the game 😍👏👏 ");
}

if(undefined){
    console.log("OMG!, we loss the game 😢 ");
}
else{
    console.log("Yeah!, we won the game 😍👏👏 ");
}

if(null){
    console.log("OMG!, we loss the game 😢 ");
}
else{
    console.log("Yeah!, we won the game 😍👏👏 ");
}

if(NaN){
    console.log("OMG!, we loss the game 😢 ");
}
else{
    console.log("Yeah!, we won the game 😍👏👏 ");
}