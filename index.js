'use strict';

const figlet = require('figlet');
const Engine = require('./app/engine');

function main() {
  let gameEngine = new Engine();
  figlet.text('DS', {
      font: 'Bloody',
      horizontalLayout: 'full',
      printDirection: 0
  }, function(err, data) {
  	console.log(data);
    console.log(gameEngine.run());
  });
}

main();
