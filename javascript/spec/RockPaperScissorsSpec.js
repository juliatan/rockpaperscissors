describe("Rock-Paper-Scissors-Lizard-Spock", function() {
  var player1, player2, game; // sets scope as local

  beforeEach(function() {
    player1 = new Player('Roi');
    player2 = new Player('Julia');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner(player1.picks, player2.picks)).toBe(player2);

      });

      it('should lose to spock', function() {

        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner(player1.picks, player2.picks)).toBe(player2);

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to lizard', function() {

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to spock', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('lizard', function() {

      it('should beat spock', function() {

        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to scissors', function() {

        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2)

      });

    });

    describe('spock', function() {

      it('should beat scissors', function() {

        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should beat rock', function() {

        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to lizard', function() {

        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to paper', function() {

        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors', 'spock', 'lizard'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null]);

      });

    });

  });

  describe('picks', function() {

    describe('random choice', function() {

      it('computer player should be able to choose a random option', function() {

        var options = ['rock', 'paper', 'scissors', 'spock', 'lizard']
        player1.randomlyPicks(options);
        expect(options).toContain(player1.pick);

      });

    });

  });

  describe('victory messages', function() {

    describe('Roi with rock', function() {

      it('should defeat Julia with lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.victoryMessage()).toBe("Roi's rock kills Julia's lizard");

      });

      it('should defeat Julia with scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.victoryMessage()).toBe("Roi's rock crushes Julia's scissors");

      });

    });

    describe('Roi with spock', function() {

      it('should defeat Julia with scissors', function() {

        player1.picks('spock');
        player2.picks('scissors');
        expect(game.victoryMessage()).toBe("Roi's spock smashes Julia's scissors");

      });

      it('should defeat Julia with rock', function() {

        player1.picks('spock');
        player2.picks('rock');
        expect(game.victoryMessage()).toBe("Roi's spock vapourizes Julia's rock");

      });

    });

    describe('Roi with scissors', function() {

      it('should be defeated by Julia with spock', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.victoryMessage()).toBe("Julia's spock smashes Roi's scissors");

      });

    });

  });

});