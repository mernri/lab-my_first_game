// cases
var bomb = "bomb";

var startPoint = "startPoint";

var endPoint = "endPoint"

var board = [
  [0, 0, 0, bomb, bomb],
  [startPoint, 0, 0, bomb, endPoint],
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
      // if (board[i][j] === bomb) {
      //   cell.addClass("bombInit");
      // }
      row.append(cell);
    } 
  }
}



/*
//  celulle (3,4) ==> matrix[2][3]
function getPosition(matrix, [row,column]) {
    var r= row-1;
    var c= column-1;
    return matrix[r][c];
  };

*/
