// defining Game class which initializes with two instace variables
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {

  rock:     { beats: ["scissors", "lizard"] },
  paper:    { beats: ["rock", "spock"] },
  scissors: { beats: ["paper", "lizard"] },
  lizard:   { beats: ["spock", "paper"] },
  spock:    { beats: ["scissors", "rock"] }

};

// defines Game method winner
Game.prototype.winner = function() {

  if(this._isSamePick()) return null; // remember null replaces nil

  if(this.PAIRS[this.player1.pick]["beats"].indexOf(this.player2.pick) > -1) {
    return this.player1;
  }

  else {
    return this.player2;
  }

};

Game.prototype._isSamePick = function() {
  return this.player1.pick === this.player2.pick;
};