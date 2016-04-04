'use strict';

const Damage = require('../app/models/damage');
const dmg = Damage.create({
  min: 10,
  max: 30,
  modifiers: ['mjolnir', 'coup_de_grace']
});

console.log(dmg);
