function Match(board, i, j) {
  this.board = board;
  this.i = i;
  this.j = j;
  this.position = board[i][j];
}

// MATCH 1
var match1 = new Match(
    [
    [free, free, free, bomb, bomb],
    [light, free, free, bomb, light],
    [bomb, free, bomb, free, free],
    [free, free, free, free, free],
    [free, free, free, bomb, free]
    ],
    1,
    0
);
// MATCH 2 
var match2 = new Match(
    [
    [free, bomb, free, light, bomb],
    [free, free, free, bomb, free],
    [free, free, bomb, free, free],
    [free, free, free, free, light],
    [free, free, free, bomb, free]
    ],
    0,
    3
);

// MATCH 3 
var match3 = new Match(
    [
    [bomb, bomb, bomb, free, bomb],
    [light, free, free, bomb, free],
    [free, free, free, free, free],
    [free, bomb, free, free, free],
    [bomb, free, free, free, light]
    ],
    1,
    0
);

// MATCH 4 
var match4 = new Match(
    [
    [light, free, free, bomb, free],
    [free, free, free, free, bomb],
    [free, bomb, bomb, free, light],
    [free, free, free, free, free],
    [free, bomb, free, bomb, free]
    ],
    0,
    0
);

// MATCH 5 
var match5 = new Match(
    [
    [bomb, free, bomb, free, light],
    [free, free, bomb, free, free],
    [bomb, free, bomb, free, free],
    [free, light, free, free, bomb],
    [bomb, free, free, free, free]
    ],
    0,
    4
);
