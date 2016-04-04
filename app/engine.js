'use strict';

const Dragon = require('./models/dragon');
const Knight = require('./models/knight');

class Engine {
  constructor() {
    this.dragon = new Dragon();
    this.knight = new Knight();
  }

  run() {
    for (let i = 0; i < 3; i++) {
      let dmg = this.knight.attack();
      this.dragon.hp = this.dragon.hp - dmg;
    }

    if (this.dragon.hp <= 0) {
      return 'final_win';
    }

    return 'final_fatality';
  }
}

module.exports = Engine;
