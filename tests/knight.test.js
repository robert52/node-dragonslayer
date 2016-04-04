'use strict';

const Knight = require('../app/models/knight');
const knight1 = new Knight({
  minDmg: 78,
  maxDmg: 98,
  hp: 1500
});

const knight2 = new Knight({
  minDmg: 78,
  maxDmg: 98,
  hp: 1500
});

knight1.on('hp:loss', function(value) {
  console.log(`${knight1.name} lost ${value} hp.`);
});

knight2.on('hp:loss', function(value) {
  console.log(`${knight2.name} lost ${value} hp.`);
});

knight1.attack(knight2);
knight2.attack(knight1);
