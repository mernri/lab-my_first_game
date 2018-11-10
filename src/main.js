// cases
var bomb = "bomb";
var light = "light";
var free = "free";
var scorePlayer = 0;
var nbMatch = 0;
var currentPlayer = 1;


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

    // MOVES DISABLES IF THE GAME ENDS
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
    }, 2000);

    // hide bombs after 5sec
    setTimeout(function() {
      $(".bomb").addClass("hidden");
    }, 2000);
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

function checkPath() {
  // IF PERILOUS => show the bombs used
  if ($(".bomb").hasClass("used")) {
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
    setTimeout(function() {
      $(".popup, .popup-content").addClass("active");
    }, 1000);
  }
  // IF SAFE  => all green
  else {
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
    scorePlayer = scorePlayer + 1;
    var cell = $("#score-player");
    cell.text(scorePlayer);
    // show the winner popup
    var contentText = $(".title");
    var contentGif = $(".gif");
    var contentButton = $("button");
    contentGif.attr("src", "https://giphy.com/embed/3o7bu57lYhUEFiYDSM");
    contentText.text("Winner popup");
    contentButton.text("I am a winner");
    setTimeout(function() {
      $(".popup, .popup-content").addClass("active");
    }, 1000);
  }
  // Fermer la popup
  $(".close").on("click", function() {
    $(".popup, .popup-content").removeClass("active");
  });
  nbMatch = nbMatch + 1;
  nextMatch();
}

/*_____________________STARTING ENDING A MATCH_____________________ */
function nextMatch() {
  if (nbMatch > 10) {
    alert("the winner is one of the 2 players. Deal with it.")
  } 
  else {
    (currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1);
  }
}

/* 2 joueurs : 

- var current player 
si player 1 qui vient de jouer et a terminé alors redessine le jeu et mon current player devient player 2 et donc c'est le score de current player qui doit être incrémenté. 

*/