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



// fonction pour faire apparaître le tableau associé à l'array "board"
function matrixCreate (board) {
  for (var i= 0; i < board.length; i++){
    var row = $("<div></div>");
    $("#game_board").append(row);
    for (var j= 0; j < board[i].length; j++){
      var cell = $('<div class="cell ' + board[i][j] +'"> </div>');
      row.append(cell);
      
      // show lights after 5sec : PROBLEM HERE => DOESN'T WORK
      if (cell.hasClass("cell light")){
        $(".light").toggle();
        setTimeout(function() {
          $(".light").toggle();
        }, 2000);
      }

      // hide bombs after 5sec
      if (cell.hasClass("cell bomb")){
        setTimeout(function(){
          $(".cell").removeClass("bomb");         
        }, 2000);
      }

    }
  }
}
