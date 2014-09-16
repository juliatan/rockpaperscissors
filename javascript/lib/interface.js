function hideResult(game) {
  $('body').css('background-image', 'none');
  $('#game_icons').css('display', 'initial');
  $('input').css('display', 'none');
  $('<li>' + game.victoryMessage1() + " " + game.victoryMessage2()+ '</li>').prependTo('#results').slideDown();
  $('li:gt(4)').fadeOut(function(){
    $(this).remove();
  });
  $('footer').css('visibility', 'hidden');
}

// On document load,
$(document).ready(function(){

  $.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    $("<img />").attr("src", arguments[i]);
    }
  }
  $.preloadImages("images/undefined_bg.jpg","images/paper_bg.jpg","images/scissors_bg.jpg","images/rock_bg.jpg","images/spock_bg.jpg","images/lizard_bg.jpg");

  // Once field input_name has registered the enter key
  $('#input_name').keypress(function (e) {
    if (e.which == 13) {
      // playerName is equal to #input_name's value
      var playerName = $('#input_name').val();
      var p1 = new Player('The Interweb');
      // set p2 to new instance with playerName val
      var p2 = new Player(playerName);
      // new game starts
      var game = new Game(p1,p2);
      $('input').css('visibility', 'hidden');

      // User clicks an image
      $('#game_icons img').on('click', function(event){
        // iterate through images and place data-juliarr value in 'choices' array
        var choices = $('#game_icons img').map(function(){
          return $(this).data('juliarrr');
        });
        // Computer randomly picks a choice
        p1.randomlyPicks(choices);
        // Data value of user's choice is sent to picks()
        p2.picks($(this).data('juliarrr'));
        // Change background depending on choice of user
        $('#game_icons').css('display', 'none');
        // Hide form
        $('input').css('display', 'none');
        // Change background colour of site.
        $('body').css('background-image', 'url(images/'+game.winner().pick+'_bg.jpg)').css('-webkit-background-size','cover').css('background-position','center center').css('repeat','no-repeat').addClass('bgShown');
        // Display footer bar
        $('#victory_message').css('visibility', 'visible').append('<p>').text(game.victoryMessage1()).appendTo('#victory_message');

        if(game.victoryMessage2()) {
          $('#victory_message').append('<br>');
          $('#victory_message').append(game.victoryMessage2());
        }

        $('#victory_message').append('<br><span>Click anywhere to try again</span>');
        event.stopPropagation();
      });

      $('body').on('click', function(){
        if($(this).hasClass('bgShown')) {
          hideResult(game);
        }
      });

    } else {
        console.log("You need to enter your name fool!");
      }
  });
});