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

function matrixCreate (board) {
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

// var i= 1;
// var j= 0; 
// var position = board[i][j];


// function updatePosition() {

// } 

var moveRight = key => (i < 4 ? i+= 1 : i)
var moveLeft = key => (i > 0 ? i-= 1 : i)
var moveUp = key => (j > 0 ? j-= 1 : j)
var moveDown = key => (j < 4 ? j+= 1 : j)

// document.onkeydown = function(key) {
//   switch (key.keyCode) {
//     case 37: position.moveLeft();
//     break;
//     case 39: position.moveRight();
//     break;
//     case 38: position.moveUp();
//     break;
//     case 40: position.moveDown();
//     break;
//   }
//   updatePosition();
// };

