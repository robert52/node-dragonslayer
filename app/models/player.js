'use strict';

const DEFAULT_NAME = 'Toto';
const DEFAULT_HP = 1500;
const DEFAULT_MIN_DMG = 10;
const DEFAULT_MAX_DMG = 10;
const EventEmitter = require('events');
const Damage = require('./damage');
const commonHelper = require('../helpers/common');

class Player extends EventEmitter {
  constructor(opts) {
    super();
    this.opts = opts || {};
    this.name = this.opts.name || DEFAULT_NAME + commonHelper.generateRandomNumber(0, 1000);
    this.hp = this.opts.hp || DEFAULT_HP;
    this.minDmg = this.opts.minDmg || DEFAULT_MIN_DMG;
    this.maxDmg = this.opts.maxDmg || DEFAULT_MAX_DMG;
  }

  attack(player) {
    let dmg = new Damage({
      min: this.opts.minDmg,
      max: this.opts.maxDmg,
      modifiers: ['mjolnir', 'coup_de_grace']
    });

    player.applyDmg(dmg);

    this.emit('attack:done', {
      player: player,
      dmg: dmg
    });
  }

  applyDmg(dmg) {
    this.hp -= dmg.value;
    this.emit('hp:loss', dmg.value);
  }
}

module.exports = Player;
