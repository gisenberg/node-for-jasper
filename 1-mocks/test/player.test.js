var proxyquire = require('proxyquire');
var expect = require('chai').expect;

describe('player', function() {
  describe('attack', function() {
    it('should do 100 damage on a roll of 20', function() {
      var player = proxyquire('../src/player', {
        './die': { roll: function() { return 20; } }
      });

      var damageDealt = player.attack();
      expect(damageDealt).to.equal(100);
    });

    it('should do 10 damage on a roll less than 20', function() {
      var player = proxyquire('../src/player', {
        './die': { roll: function() { return 1; } }
      });

      var damageDealt = player.attack();
      expect(damageDealt).to.equal(10);
    });
  });
});
