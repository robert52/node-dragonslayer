'use strict';

const HP = 50;
const NAME = 'Clintz';

class Dragon {
  constructor(opts) {
    this.opts = opts || {};
    this.name = this.opts.name || NAME;
    this.hp = this.opts.hp || HP;
  }
}

module.exports = Dragon;
