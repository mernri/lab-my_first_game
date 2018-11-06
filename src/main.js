// cases
var bomb = "bomb";
var light = "light";
var free = "free";

var board = [
  [free, free, free, bomb, bomb],
  [light, free, free, bomb, light],
  [bomb, free, bomb, free, free],
  [free, free, free, free, free],
  [free, free, free, bomb, free]
];

$(document).ready(function() {
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
      alert("partie terminée!");
      // moves not possible
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
    }, 3000);

    // hide bombs after 5sec
    setTimeout(function() {
      $(".bomb").addClass("hidden");
    }, 3000);
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

// _____________ CHECKING IF THE PATH WAS PERILOUS __________________

function checkPath() {
  // if perilous => show the bombs used
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
  }
  // if not perilous => all green
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
  }
}
