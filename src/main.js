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


$(document).ready(function(){
  matrixCreate(board);
})

//__________ CREATE A MATRIX WITH BOMBS, END/START POINTS ___________________

var matrixCreate = board => {
  for (var i= 0; i < board.length; i++){
    var row = $("<div></div>");
    $("#game_board").append(row);

    for (var j= 0; j < board[i].length; j++){
      var cell = $('<div class="cell ' + board[i][j] +'"> </div>');
      row.append(cell);
      
      // // show lights after 5sec : PROBLEM HERE => TOGGLE NOT WORKING
      // if (cell.hasClass("light")){
      //   setTimeout(function() {
      //     $(".light").addClass("hidden");
      //   }, 2000);
      // }

      // hide bombs after 5sec
      if (cell.hasClass("bomb")){
        setTimeout(function(){
          $(".bomb").addClass("hidden");         
        }, 3000);
      }

    }
  }
}


// _____________ FUNCTIONS FOR MOVING _____________________________________

var i= 1;
var j= 0; 
var position = board[i][j];


var moveRight = key => (j < 4 ? j+= 1 : j)
var moveLeft = key => (j > 0 ? j-= 1 : j)
var moveUp = key => (i > 0 ? i-= 1 : i)
var moveDown = key => (i < 4 ? i+= 1 : i)

document.onkeydown = function(key) {
  switch (key.keyCode) {
    case 37: moveLeft();
    break;
    case 39: moveRight();
    alert("la nouvelle position est : (" + i + "," + j + ")");
    break;
    case 38: moveUp();
    break;
    case 40: moveDown();
    break;
  }
  // UPDATE CELL COLOR => DOESN'T WORK
  var cell = $('<div class="cell ' + board[i][j] +'"> </div>');
    cell.addClass("used");
};

