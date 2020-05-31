
function minesweeper(matrix) {
  const mineMap = [];
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  for (let row = 0; row < matrix.length; row++) {
    mineMap.push(new Array(matrix[row].length));
    for (let col = 0; col < matrix[0].length; col++) {
      let count = 0;
      for (const direction of directions) {
        const [rd, cd] = direction;
        if (matrix[row + rd] && matrix[row + rd][col + cd]) count++;
      }
      mineMap[row][col] = count;
    }
  }
  return mineMap;
}
