function solution(board) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const n = board.length;
  const dangerZone = JSON.parse(JSON.stringify(board));

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === 0) continue;

      for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

        dangerZone[nx][ny] = 1;
      }
    }
  }

  const flatDangerZone = dangerZone.flat();
  const numDangerCells = flatDangerZone.filter((cell) => cell).length;
  const numSafeCells = n * n - numDangerCells;
  
  return numSafeCells;
}