// cases
var bomb = "bomb";
var light = "light";
var free = "free";
var currentPlayer = 0;
var scoreCell = $("#score-player1");
var scoreArray = [0,0];


var board = [
  [free, free, free, bomb, bomb],
  [light, free, free, bomb, light],
  [bomb, free, bomb, free, free],
  [free, free, free, free, free],
  [free, free, free, bomb, free]
];

$(document).ready(function() {
  // CREATE THE MATRIX with bombs and lights
  matrixCreate(board);
  // HOW TO MOVE
  document.onkeydown = function(key) {
    if (!$(".light").hasClass("used")) {
      switch (key.keyCode) {
        case 37:
          moveLeft();
          break;
        case 39:
          moveRight();
          break;
        case 38:
          moveUp();
          break;
        case 40:
          moveDown();
          break;
      }
    }
    // UPDATE CELL COLOR when changing cell
    var cell = $(".row-" + i + ".col-" + j);
    cell.addClass("used").removeClass("hidden");

    // CHECK THE PATH AT THE END OF A MATCH
    if ($(".light").hasClass("used")) {
      checkPath();
    }
  };
});

//__________ CREATE A MATRIX WITH BOMBS, END/START POINTS ___________________

var matrixCreate = board => {
  for (var i = 0; i < board.length; i++) {
    var row = $("<div></div>");
    $("#game_board").append(row);

    for (var j = 0; j < board[i].length; j++) {
      var cell = $('<div class="cell ' + board[i][j] + '"> </div>');
      cell.addClass("row-" + i).addClass("col-" + j);
      row.append(cell);
    }

    // show lights after 3sec :
    $(".light").addClass("hidden");
    setTimeout(function() {
      $(".light").removeClass("hidden");
    }, 1000);

    // hide bombs after 5sec
    setTimeout(function() {
      $(".bomb").addClass("hidden");
    }, 1000);
  }
};

// _____________ FUNCTIONS FOR MOVING _____________________________________

var i = 1;
var j = 0;
var position = board[i][j];

var moveRight = key => (j < 4 ? (j += 1) : j);
var moveLeft = key => (j > 0 ? (j -= 1) : j);
var moveUp = key => (i > 0 ? (i -= 1) : i);
var moveDown = key => (i < 4 ? (i += 1) : i);

// _____________ CHECKING IF THE PATH WAS PERILOUS OR NOT__________________
function youLose() {
  $(".bomb.used")
    .removeClass("used")
    .addClass("explosion");
  $(".bomb").removeClass("hidden");
  $(".light")
    .removeClass("light")
    .addClass("all-red");
  $(".used")
    .removeClass("used")
    .addClass("all-red");
  // Show the loser popup
  var contentText = $(".title");
  var contentGif = $(".gif");
  var contentButton = $("button");
  contentGif.attr("src", "https://giphy.com/embed/3oEjI0maaCZA8w75HW");
  contentText.text("Loser");
  contentButton.text("I accept that I am a loser");

  setTimeout(function() {
    $(".popup, .popup-content").addClass("active");
  }, 750);
}

function youWin() {
  $(".light")
    .removeClass("light")
    .removeClass("used")
    .addClass("all-green");
  $(".used")
    .removeClass("light")
    .removeClass("used")
    .addClass("all-green");
  $(".bomb").removeClass("hidden");
  // edit the score
  scoreArray[currentPlayer]++;
  scoreCell.text(scoreArray[currentPlayer]);
  // show the winner popup
  var contentText = $(".title");
  var contentGif = $(".gif");
  var contentButton = $("button");
  contentGif.attr("src", "https://giphy.com/embed/3o7bu57lYhUEFiYDSM");
  contentText.text("Winner");
  contentButton.text("I am a winner");
  setTimeout(function() {
    $(".popup, .popup-content").addClass("active");
  }, 750);
}

function checkPath() {
  // Check if perilous or not
  if ($(".bomb").hasClass("used")) {
    youLose();
  } else {
    youWin();
  }
  // Close the popup
  $(".close").on("click", function() {
    $(".popup, .popup-content").removeClass("active");
    switchPlayer();
  });
}

/*_____________________SWITCH PLAYER_____________________ */
function switchPlayer() {
  i = 1;
  j = 0;
  position = board[i][j];

  // end game 
  if (scoreArray[0] === 10 || scoreArray[1] === 10 ) {
    alert("this is the end");
  }
  else {
  if (currentPlayer === 1) {
    currentPlayer = 0;
    scoreCell = $("#score-player1");
    $("#game_board").empty();
    matrixCreate(board);
  } else {
    currentPlayer = 1;
    scoreCell = $("#score-player2");
    $("#game_board").empty();
    matrixCreate(board);
  }
  }; 
}
