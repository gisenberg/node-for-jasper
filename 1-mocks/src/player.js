var die = require('./die');

module.exports = {
  attack: function() {
    var attackRoll = die.roll(20);
    var damage = 10;

    if(attackRoll === 20)
      damage = 100;

    return damage;
  }
}
