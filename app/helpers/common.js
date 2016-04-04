'use strict';

module.exports.generateRandomNumber = generateRandomNumber;
module.exports.chanceOf = chanceOf;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chanceOf(percentage){
    let random = generateRandomNumber(1, 100);
    return random < percentage;
}
