"use strict";

// Returns a random number between 0 and high
const randomNumber = function (high) {
  return Math.floor(Math.random() * high);
};

let money = 1000;

let costPerSpin = 10;

var reels = document.getElementsByClassName("reel");

// This function updates the bank div with value of money.
const updateMoney = () => {
  let moneyElement = document.querySelector(".bank");
  moneyElement.innerHTML = `£${money}💷`;
};
//update the initial money bank
updateMoney();


function priceMoney(level, fruit) {
  fruit += 1
  if (level == 'big win') {
    return 1000 * fruit * fruit
  } else {
    return 500 * fruit
  }
}


// Dont worry about this its some magic sauce :P
function getFruit(a, b, c, d) {
  return [a, b, c, d].sort()[1]
}

function reelSpin() {
  let moveOne = randomNumber(4);
  let moveTwo = randomNumber(4);
  let moveThree = randomNumber(4);
  let moveFour = randomNumber(4);

  const sizeOfIcon = document.body.clientWidth * 0.2;

  reels[0].scrollTop = sizeOfIcon * moveOne;
  reels[1].scrollTop = sizeOfIcon * moveTwo;
  reels[2].scrollTop = sizeOfIcon * moveThree;
  reels[3].scrollTop = sizeOfIcon * moveFour;

  money -= costPerSpin;
  updateMoney();

  //checking winnning condition
  if (moveOne == moveTwo && moveTwo == moveThree && moveThree == moveFour) {
    const audioElement = document.getElementById("coinDrop");
    audioElement.play();

    let fruit = moveOne // 0 -- 11

    money += priceMoney('big win', fruit);

    updateMoney();
  } else if (
    (moveOne == moveTwo && moveTwo == moveThree) ||
    (moveOne == moveThree && moveThree == moveFour) ||
    (moveTwo == moveThree && moveThree == moveFour) ||
    (moveOne == moveTwo && moveTwo == moveFour)
  ) {
    const audioElement = document.getElementById("coinDrop");
    audioElement.play();
    
    let fruit = getFruit(moveOne, moveTwo, moveThree, moveFour)
    money += priceMoney('medium win', fruit);

    updateMoney();


  }

  // Play the sound
  const audioElement = document.getElementById("ding");
  audioElement.play();
}
