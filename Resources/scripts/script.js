"use strict";
// const prompt = require('prompt-sync')({ sigint: true });
/* let fruitOne = 'Apple'
let fruitTwo = 'Banana'
let fruitThree = 'Cherry'
let fruitFour  = 'Diamond'
let fruitFive = '£'
*/

const fruits = ["🍏", "🍌", "🍒", "♦️", "£"];

const prizes = [2, 5, 10, 20, 50];

// Returns a random number between 0 and high
const randomNumber = function (high) {
  return Math.floor(Math.random() * high);
};

// picks a random fruit from fruits
const randomFruit = function () {
  const pick = randomNumber(fruits.length);
  return fruits[pick];
};

// creates a reel of random fruits
const createReel = function () {
  const numberOfFruit = 12;
  const arr = [];
  for (let i = 0; i < numberOfFruit; i += 1) {
    const pick = randomFruit();
    arr.push(pick);
  }
  return arr;
};

const reel1 = createReel();
const reel2 = createReel();
const reel3 = createReel();
const reel4 = createReel();

//const reel1 = [fruitOne, fruitTwo, fruitThree, fruitFour, fruitTwo, fruitThree, fruitOne , fruitThree, fruitFour, fruitTwo, fruitFive, fruitOne, fruitTwo ]
//const reel2 = [fruitOne, fruitFour, fruitThree, fruitTwo, fruitTwo, fruitThree, fruitOne, fruitTwo, fruitOne, fruitThree, fruitFive, fruitTwo, fruitOne]
//const reel3 = [fruitThree, fruitTwo, fruitThree, fruitOne, fruitOne, fruitTwo, fruitFour, fruitOne, fruitThree, fruitTwo, fruitFive, fruitThree, fruitOne]
//const reel4 = [fruitOne, fruitFour, fruitThree, fruitTwo, fruitTwo, fruitThree, fruitOne, fruitTwo, fruitOne, fruitThree, fruitFive, fruitTwo, fruitOne]

let money = 100;

//let prizefruitOne = 2
//let prizefruitTwo = 5
//let prizefruitThree = 10
//let prizefruitFour = 20
//let prizefruitFive = 50

let costPerSpin = 10;

//while (money >= costPerSpin) {
function spinReels() {
  console.log("You have £" + money);
  prompt("Press enter to spin the wheels");
  money -= costPerSpin;
  let p1 = randomNumber(12);
  let p2 = randomNumber(12);
  let p3 = randomNumber(12);
  let p4 = randomNumber(12);

  console.log(reel1[p1] + " " + reel2[p2] + " " + reel3[p3] + " " + reel4[p4]);
  if (
    reel1[p1] ==
    reel2[p2] /* && reel2[p2] == reel3[p3] && reel3[p3] == reel4[p4] */
  ) {
    // Create variable for fruit shown on all reels
    const shown = reel1[p1];

    // Find position in fruits of the shown fruit
    const indexInFruits = fruits.indexOf(shown);
    console.log(indexInFruits);

    // find the prize for that fruit winning, by looking up in prizes
    const prize = prizes[indexInFruits];
    money = money + prize;
    console.log("You win :o)");
    console.log("£" + prize);
  } else {
    console.log("you lose");
  }
}
//console.log("youre out of money");

//Adding Sound
// var soundSelected = document.getElementById("ding");
// var playSound = function() {
//     	soundSelected.play();}
// playBtn.addEventListener('click', playSound, false);

//const playSound = function () {
 //   const audioElement = document.getElementById("ding");
//    audioElement.play();
//}

//spinning reels
var reels = document.getElementsByClassName("reel");

function reelSpin() {
    reels[0].scrollTop += 160;
    reels[1].scrollTop += 160;
    reels[2].scrollTop += 160;

    // Play the sound
    const audioElement = document.getElementById("ding");
    audioElement.play();
  }

  /* function testSpin(){ 
    let a = document.getElementById("fruits1")
    a.scroll({
    top: 2000,
    left: 0,
    behavior: 'smooth'
    });*/
