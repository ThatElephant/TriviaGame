var correctAnswersScore= 0;
var wrongAnswersScore= 0;

var countdownNumber= 20;
var intervalID;



function stop() {
      clearInterval(intervalId);
      countdownNumber= 20;
};


$("#introstartbutton").click(function() {
            $("#introwrap").css({
              "display": "none",
            });
            $("#gamestarted").css({
              "display": "inherit",
            });
            question1();
        });
  
function question1() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie Inception come out to theatres?");
  $("#answer1").text("2009");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 2010");
      wrongAnswersScore++;
      question2();
    });
  $("#answer2").text("2010");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question2();
    });
  $("#answer3").text("2011");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 2010");
      wrongAnswersScore++;
      question2();
    });
  $("#answer4").text("2012");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 2010");
      wrongAnswersScore++;
      question2();
    });

      function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was B: 2010");
          wrongAnswersScore++;
          question2();
      }
    };

};



function question2() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie Gravity come out to theatres?");
  $("#answer1").text("2010");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 2013");
      wrongAnswersScore++;
      question3();
    });
  $("#answer2").text("2011");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 2013");
      wrongAnswersScore++;
      question3();
    });
  $("#answer3").text("2012");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 2013");
      wrongAnswersScore++;
      question3();
    });
  $("#answer4").text("2013");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question3();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was D: 2013");
          wrongAnswersScore++;
          question3();
      }
    };
};

function question3() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie The Martian come out to theatres?");
  $("#answer1").text("2013");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Wrong! the correct answer was C: 2015");
      wrongAnswersScore++;
      question4();
    });
  $("#answer2").text("2014");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Wrong! the correct answer was C: 2015");
      wrongAnswersScore++;
      question4();
    });
  $("#answer3").text("2015");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question4();
    });
  $("#answer4").text("2016");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Wrong! the correct answer was C: 2015");
      wrongAnswersScore++;
      question4();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was C: 2015");
          wrongAnswersScore++;
          question4();
      }
    };
};

function question4() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie Jurassic World come out to theatres?");
  $("#answer1").text("2015");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question5();
    });
  $("#answer2").text("2014");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Wrong! the correct answer was A: 2015");
      wrongAnswersScore++;
      question5();
    });
  $("#answer3").text("2013");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Wrong! the correct answer was A: 2015");
      wrongAnswersScore++;
      question5();
    });
  $("#answer4").text("2016");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Wrong! the correct answer was A: 2015");
      wrongAnswersScore++;
      question5();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was A: 2015");
          wrongAnswersScore++;
          question5();
      }
    };
};

function question5() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie Interstellar come out to theatres?");
  $("#answer1").text("2015");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 2014");
      wrongAnswersScore++;
      question6();
    });
  $("#answer2").text("2014");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question6();
    });
  $("#answer3").text("2013");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 2014");
      wrongAnswersScore++;
      question6();
    });
  $("#answer4").text("2016");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 2014");
      wrongAnswersScore++;
      question6();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was B: 2014");
          wrongAnswersScore++;
          question6();
      }
    };
};

function question6() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie Wreck it Ralph come out to theatres?");
  $("#answer1").text("2009");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 2012");
      wrongAnswersScore++;
      question7();
    });
  $("#answer2").text("2011");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 2012");
      wrongAnswersScore++;
      question7();
    });
  $("#answer3").text("2010");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 2012");
      wrongAnswersScore++;
      question7();
    });
  $("#answer4").text("2012");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question7();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was D: 2012");
          wrongAnswersScore++;
          question7();
      }
    };
};

function question7() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie Fight Club come out to theatres?");
  $("#answer1").text("1999");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question8();
    });
  $("#answer2").text("2001");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Wrong! the correct answer was A: 1999");
      wrongAnswersScore++;
      question8();
    });
  $("#answer3").text("2000");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Wrong! the correct answer was A: 1999");
      wrongAnswersScore++;
      question8();
    });
  $("#answer4").text("1998");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Wrong! the correct answer was A: 1999");
      wrongAnswersScore++;
      question8();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was A: 1999");
          wrongAnswersScore++;
          question8();
      }
    };
};

function question8() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie The Lord of the Rings: The Return of the King come out to theatres?");
  $("#answer1").text("2004");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Wrong! the correct answer was C: 2003");
      wrongAnswersScore++;
      question9();
    });
  $("#answer2").text("2002");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Wrong! the correct answer was C: 2003");
      wrongAnswersScore++;
      question9();
    });
  $("#answer3").text("2003");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question9();
    });
  $("#answer4").text("2001");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Wrong! the correct answer was C: 2003");
      wrongAnswersScore++;
      question9();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was C: 2003");
          wrongAnswersScore++;
          question9();
      }
    };
};

function question9() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie Toy Story come out to theatres?");
  $("#answer1").text("1997");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 1995");
      wrongAnswersScore++;
      question10();
    });
  $("#answer2").text("1998");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 1995");
      wrongAnswersScore++;
      question10();
    });
  $("#answer3").text("1996");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Wrong! the correct answer was D: 1995");
      wrongAnswersScore++;
      question10();
    });
  $("#answer4").text("1995");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      question10();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was D: 1995");
          wrongAnswersScore++;
          question10();
      }
    };
};

function question10() {
  function run() {
      intervalId = setInterval(decrement, 1000);
    };
    run();
  $(".answersbox1").off("click");
  $(".answersbox2").off("click");
  $(".answersbox3").off("click");
  $(".answersbox4").off("click");
  $("#gamequestion").html("When did the movie The Truman Show come out to theatres?");
  $("#answer1").text("1996");
    $(".answersbox1").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 1998");
      wrongAnswersScore++;
      gameEnd();
    });
  $("#answer2").text("1998");
    $(".answersbox2").on("click", function() {
      stop();
      alert("Correct!");
      correctAnswersScore++;
      gameEnd();
    });
  $("#answer3").text("1999");
    $(".answersbox3").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 1998");
      wrongAnswersScore++;
      gameEnd();
    });
  $("#answer4").text("1997");
    $(".answersbox4").on("click", function() {
      stop();
      alert("Wrong! the correct answer was B: 1998");
      wrongAnswersScore++;
      gameEnd();
    });

    function decrement() {
      countdownNumber--;
      $("#timerwrap").html("<p>" + countdownNumber + "</p>");
        if (countdownNumber === 0) {
          stop();
          alert("Time Up! The correct answer was B: 1998");
          wrongAnswersScore++;
          gameEnd();
      }
    };
};

function gameEnd() {
  stop();
  countdownNumber= 20;
    $("#gamestarted").css({
              "display": "none",
            });
    $("#gameend").css({
              "display": "inherit",
            });
    $("#correctnumberplace").html(correctAnswersScore);
    $("#wrongnumberplace").html(wrongAnswersScore);
    $("#retrybutton").on("click", function() {
      $("#gameend").css({
              "display": "none",
            });
      $("#gamestarted").css({
              "display": "inherit",
            });
      correctAnswersScore= 0;
      wrongAnswersScore= 0;
      question1();
    });
};

