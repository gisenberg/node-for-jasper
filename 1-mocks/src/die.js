module.exports = {
  roll: function(sides) {
    return Math.floor((Math.rand() * sides) + 1);
  }
};
