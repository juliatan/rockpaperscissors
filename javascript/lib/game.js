// defining Game class which initializes with two instace variables
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {

  rock:     { scissors: "crushes", lizard: "kills" },
  paper:    { rock: "covers", spock: "disproves" },
  scissors: { paper: "cuts", lizard: "decapitate" },
  lizard:   { spock: "poisons", paper: "eats" },
  spock:    { scissors: "smashes", rock: "vapourizes" }

};

// defines Game method winner
Game.prototype.winner = function() {

  if(this._isSamePick()) {
    return "draw" ; // remember null replaces nil
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
};

Game.prototype.victoryMessage = function() {
  var message;

  if(this.winner() === "draw"){
    message = "this is a draw";
  } else {

  // if(this.winner()) {
    message = this.winner().name + " 's " + this.winner().pick + " " + this._victoryVerb() + " " + this.loser().name + "'s " + this.loser().pick;
  }
  // else {
  //   message = "It's a draw";
  // }

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