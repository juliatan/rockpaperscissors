// defining Game class which initializes with two instace variables
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

// Game.prototype.PAIRS = {

//   rock:     { beats: ["scissors", "lizard"], verb: ["crushes", "kills"] },
//   paper:    { beats: ["rock", "spock"], verb: ["covers", "disproves"] },
//   scissors: { beats: ["paper", "lizard"], verb: ["cuts", "decapitate"] },
//   lizard:   { beats: ["spock", "paper"], verb: ["poisons", "eats"] },
//   spock:    { beats: ["scissors", "rock"], verb: ["smashes", "vapourizes"] }

// };

Game.prototype.PAIRS = {

  rock:     { "scissors": "crushes", "lizard": "kills" },
  paper:    { "rock": "covers", "spock": "disproves" },
  scissors: { "paper": "cuts", "lizard": "decapitate" },
  lizard:   { "spock": "poisons", "paper": "eats" },
  spock:    { "scissors": "smashes", "rock": "vapourizes" }

};

// defines Game method winner
Game.prototype.winner = function() {

  if(this._isSamePick()) return null; // remember null replaces nil

  // if(this.PAIRS[this.player1.pick]["beats"].indexOf(this.player2.pick) > -1) {
  //   return this.player1;
  // }

  if(this.player2.pick in this.PAIRS[this.player1.pick]) {
    return this.player1;
  }

  else {
    return this.player2;
  }

};

Game.prototype._isSamePick = function() {
  return this.player1.pick === this.player2.pick;
};

Game.prototype.victoryMessage = function(player1, player2) {
  if(this.winner() === this.player1) {
    return this.player1.name + "'s " + this.player1.pick + " " + this.PAIRS[this.player1.pick][this.player2.pick] + " " + this.player2.name + "'s " + this.player2.pick;
  }
  else {
    return "Sorry, you lose";
  }

};