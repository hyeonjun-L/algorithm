function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  const getRange = function(size) {
    return Math.floor(size / 2);
  };
  
  const range = [
    getRange(board[0]),
    getRange(board[1])
  ];

  const directions = {
    "left": () => x--,
    "right": () => x++,
    "down": () => y--,
    "up": () => y++
  };
  
  for (let i = 0; i < keyinput.length; i++) {
    let k = keyinput[i];
    
    if (directions[k]) {
      directions[k]();
    }
    
    x = Math.abs(x) > range[0] ?
        x > 0 ? range[0] : -range[0] :
        x;
    
    y = Math.abs(y) > range[1] ?
        y > 0 ? range[1] : -range[1] :
        y;
  }
  
  return [x, y];
}