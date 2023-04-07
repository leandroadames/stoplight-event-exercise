let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
let count = 0;


stopButton.addEventListener("click", function (){
stopLight.classList.toggle("stop");
 })

slowButton.addEventListener("click", function (){
  slowLight.classList.toggle("slow");
 })

goButton.addEventListener("click", function (){
  goLight.classList.toggle("go");

 })

 // mouse movent listeners

 function handlemouseEntered(event){
  console.log(`entered ${event.target.textcontent} button`);
 }

 function handlemouseLeft(event) {
  console.log(`left ${event.target.textcontent} button`)
 }

stopButton.addEventListener('mouseenter', handlemouseEntered);
slowButton.addEventListener('mouseenter', handlemouseEntered);
goButton.addEventListener('mouseenter', handlemouseEntered);

stopButton.addEventListener('mouseenter', handlemouseLeft);
slowButton.addEventListener('mouseenter', handlemouseLeft);
goButton.addEventListener('mouseenter', handlemouseLeft);




 function handleBulbOn(event) {
  console.log(`${event.target.textcontent} bulb on`)

}
goButton.addEventListener('click', handleBulbOn);


//  function handlemouseEntered(event){
//   console.log(`entered ${event.target.textcontent} button`);

// (function() {
//   'use strict';

//   // YOUR CODE HERE
// })();
