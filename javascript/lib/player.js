// defining Player class which takes a string and stores it as an instance var
// during initialization
function Player(name) {
  this.name = name;
};

// defines Player method "picks"
Player.prototype.picks = function(pick) {
  this.pick = pick;
};