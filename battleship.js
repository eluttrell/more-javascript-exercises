// var board = [
//   ['o', ' ', 'o', 'o', ' '],
//   ['o', ' ', ' ', ' ', ' '],
//   ['o', ' ', 'o', 'o', 'o'],
//   ['o', ' ', ' ', ' ', ' '],
//   [' ', ' ', 'o', ' ', 'o'],
//   [' ', ' ', 'o', ' ', 'o']
// ];
// function fire(row, col) {
//   if (board[row][col] === 'o') {
//     board[row][col] = 'x';
//     return 'Hit!';
//   } else {
//     return 'Miss';
//   }
// }

var game = function initializeFire() {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];
  function fire(row, col) {
    if (board[row][col] === 'o') {
      board[row][col] = 'x';
      return 'Hit!';
    } else {
      return 'Miss';
    }
  }
  return fire;
};

var fire1 = game();
var fire2 = game();

console.log(fire1(0, 1));
