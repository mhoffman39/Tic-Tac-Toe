
document.getElementById("block-0").addEventListener("click", function() { move(0);});
document.getElementById("block-1").addEventListener("click", function() { move(1);});
document.getElementById("block-2").addEventListener("click", function() { move(2);});
document.getElementById("block-3").addEventListener("click", function() { move(3);});
document.getElementById("block-4").addEventListener("click", function() { move(4);});
document.getElementById("block-5").addEventListener("click", function() { move(5);});
document.getElementById("block-6").addEventListener("click", function() { move(6);});
document.getElementById("block-7").addEventListener("click", function() { move(7);});
document.getElementById("block-8").addEventListener("click", function() { move(8);});
document.getElementById("newGame").addEventListener("click", function() {newGame() ;});

let moves = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O','X'];
let index = 0;
let plays = [];

move = (block) => {
  var place = 'block-' + block;
  document.getElementById(`${place}`).innerHTML = moves[index];
  plays[block] = moves[index];
  if (index >= 4) {
    determineWinner(plays);
  }
  index++;
}

determineWinner = (plays) => {
  checkTopRow(plays);
  checkMiddleRow(plays);
  checkBottomRow(plays);
  checkLeftColumn(plays);
  checkMiddleColumn(plays);
  checkRightColumn(plays);
  checkMajorDiag(plays);
  checkMinorDiag(plays);
  checkFullBoard(plays);
}

checkTopRow = (plays) => {
  if (plays[0] === plays[1] && plays[0] === plays[2]) {
    if (plays[0] !== undefined) {
      document.getElementById("winner").innerHTML = plays[0] + " wins!"
      plays = [];
      index = 0;
    }
  }
}
checkMiddleRow = (plays) =>{
  if (plays[3] === plays[4] && plays[3] === plays[5]) {
    if (plays[3] !== undefined) {
      document.getElementById("winner").innerHTML = plays[3] + " wins!"
      plays = [];
      index = 0;
    }
  }
}
checkBottomRow = (plays) => {
  if (plays[6] === plays[7] && plays[6] === plays[8]) {
    if (plays[6] !== undefined) {
      document.getElementById("winner").innerHTML = plays[6] + " wins!"
      plays = [];
      index = 0;
    }
  }
}
checkLeftColumn = (plays) => {
  if (plays[0] === plays[3] && plays[0] === plays[6]) {
    if (plays[0] !== undefined) {
      document.getElementById("winner").innerHTML = plays[0] + " wins!"
      plays = [];
      index = 0;
    }
  }
}
checkMiddleColumn = (plays) => {
  if (plays[1] === plays[4] && plays[1] === plays[7]) {
    if (plays[1] !== undefined) {
      document.getElementById("winner").innerHTML = plays[1] + " wins!"
      plays = [];
      index = 0;
    }
  }
}
checkRightColumn = (plays) => {
  if (plays[2] === plays[5] && plays[2] === plays[8]) {
    if (plays[2] !== undefined) {
      document.getElementById("winner").innerHTML = plays[2] + " wins!"
      plays = [];
      index = 0;
    }
  }
}
checkMajorDiag = (plays) => {
  if (plays[6] === plays[4] && plays[6] === plays[2]) {
    if (plays[6] !== undefined) {
      document.getElementById("winner").innerHTML = plays[6] + " wins!"
      plays = [];
      index = 0;
    }
  }
}
checkMinorDiag = (plays) => {
  if (plays[0] === plays[4] && plays[0] === plays[8]) {
    if (plays[0] !== undefined) {
      document.getElementById("winner").innerHTML = plays[0] + " wins!"
      plays = [];
      index = 0;
    }
  }
}
checkFullBoard = (plays) => {
  if (plays.length === 9) {
    document.getElementById("winner").innerHTML = "No Winner This Time"
    plays = [];
    index = 0;
  }
}
newGame = () => {
  plays = [];
  index = 0;
  for (var i = 0; i < 9; i ++) {
    var place = 'block-' + i;
    document.getElementById(`${place}`).innerHTML = '';
    document.getElementById("winner").innerHTML = '';
  }
}

