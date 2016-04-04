'use strict';

const Player = require('./player');

class Knight extends Player {
  constructor(opts) {
    super(opts);
    this.critChance = this.opts.critChance || 10;
    this.mjolnirChance = this.opts.mjolnirChance || 20;
  }
}

module.exports = Knight;
