// defining Game class which initializes with two instace variables
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {

  rock:     { scissors: "crushes", lizard: "kills" },
  paper:    { rock: "covers", spock: "disproves" },
  scissors: { paper: "cut", lizard: "decapitate" },
  lizard:   { spock: "poisons", paper: "eats" },
  spock:    { scissors: "smashes", rock: "vaporizes" }

};

// defines Game method winner
Game.prototype.winner = function() {
  if(this._isSamePick()) {
    return "draw"; // remember null replaces nil
  }
  // checks where player2's pick is one of the keys in the hash
  if(this.player2.pick in this.PAIRS[this.player1.pick]) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
}

Game.prototype._isSamePick = function() {
  return this.player1.pick === this.player2.pick;
  debugger
};

Game.prototype.victoryMessage1 = function() {
  var message;
  if(this.winner() === "draw"){
    message = "It's a draw!";
  } else {
    message = this.winner().name + "'s " + this.winner().pick + " " + this._victoryVerb();
  }
  return message
};

Game.prototype.victoryMessage2 = function() {
  var message;
  if(this.winner() === "draw") {
    return "";
  } else {
    message = this.loser().name + "'s " + this.loser().pick;
  }
  return message
};

Game.prototype._victoryVerb = function() {
  if(this.winner() === "draw"){
    return null;
  }
  else {
    return this.PAIRS[this.winner().pick][this.loser().pick];
  }
};