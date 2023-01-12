//                 CH - Advance Topics

// For loop: When you know how many times you have to loop.
//1. While : When you don't know how many times you have to loop.

finished = true;
while (finished == true) {
  console.log('looping');
  finished = false;
}

//2. addEventListener

// DoM manipulation
if(document.getElementById('playDiv')!=null){
  // alert('Hi');
  let play = document.getElementById('playDiv');
  // play.innerText="";
  // play.innerText="Hello";
  // play.onclick = () =>{
  //   play.innerText="";
  //   play.innerText="Hello Kuldeep";
  // }

  // play.addEventListener('click',function(e){
  //   console.log('Hellllllllo World');
  // })
  play.addEventListener('keydown',function(e){
    play.innerText="";
    play.innerText=e.key;
    console.log('Hellllllllo');
  })

}

// console.log(play.innerText);

//3. Audio Tag 