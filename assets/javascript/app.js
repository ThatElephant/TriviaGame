
$("#introstartbutton").click(function() {
            $("#introwrap").css({
              "display": "none",
            });
            $("#gamestarted").css({
              "display": "inherit",
            });
            start();
        });
  
function start() {
  $.ajax({
    url: "https://opentdb.com/api.php?amount=10&type=multiple",
    type: "GET"
  }).done(function(response) {
    $("#gamecategory").html(response.results[0].category);
    $("#gamequestion").html(response.results[0].question);
    $(".answers").text(response.results[0].correct_answer);
  });
};


/*

  Game start
    bring up random question
    4 answers
    countdown timer
  once a button is clicked or timer runs out
    determine wrong or right
    add or minus points
    show correct answer
    timer before next question
  Once time is up and new question starts
    repeat game start
  after 5 questions
    game ends
      break game start function
    show score
    rest button
      initiate game start function
    reset score
    reset questions
*/



// var game = {
// 	score: 0,
//   setup: function() {
//     // this code will be run once before the game starts and then never again
//   },
//   start: function() {
//   	// this code will be run every time the game starts again
//     this.score = 0;
//     this.refresh();
//   },
//   win: function() {
//   	// this code will be run when the player wins
//   },
//   lose: function() {
//   	// this code will be run when the player loses
//   },
//   update: function() {
//   	// this code will be run when something happens
//     this.score++;
//     this.refresh();
//   },
//   refresh: function() {
//     // this code should refresh the score or anything else that needs to update
//     $('#game').html(this.score);
//   }
// };


// $(function() {
//   game.setup(); // one time setup
// 	game.start(); // start the game
//   $("#game").click(function() {
//   	game.update();
//   });
// });