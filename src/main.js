// cases
var bomb = "bomb";

var light = "light";


var board = [
  [0, 0, 0, bomb, bomb],
  [light, 0, 0, bomb, light],
  [bomb, 0, bomb, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, bomb, 0]
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
