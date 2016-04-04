'use strict';
const commonHelper = require('../helpers/common');
const DEFAULTS = {
  chance: {
    mjolnir: 20,
    coup_de_grace: 15,
    fire_attack: 30
  }
}

class Damage {
  constructor(opts) {
    this.opts = opts || {};

    // extend with defaults and with data sent to constructor
    Object.assign(this, DEFAULTS, opts);

    // generate damage and modifier
    this.initial = this._generateDamage();
    this.value = this.initial;
    this._mods = this._generateModifiers();
    this._mods.map((mod) => {
      this.value += mod(this.value);
    });
  }

  _generateDamage() {
    let value = commonHelper.generateRandomNumber(this.min, this.max);
    return value;
  }

  _generateModifiers() {
    return this.modifiers.map((mod) => {
      return this._generateModifier(mod);
    });
  }

  _generateModifier(type) {
    if (type === 'mjolnir' && commonHelper.chanceOf(this.chance.mjolnir)) {
        return (dmg) => {
            return dmg + 200;
        };
    }
    if (type === 'coup_de_grace' && commonHelper.chanceOf(this.chance.coup_de_grace)) {
        return (dmg) => {
            return dmg * 4;
        }
    }
    if (type === 'fire_attack' && commonHelper.chanceOf(this.chance.fire_attack)) {
        this.burnStacks = this.burnStacks || [];
        return (dmg) => {
            this.burnStacks.push(BURNING_ROUNDS_COUNT * 2);
            return dmg + 100;
        }
    }
    return (dmg) => {
        return dmg;
    }
  }
}

Damage.create = function(data) {
  return new Damage(data);
};

module.exports = Damage;
