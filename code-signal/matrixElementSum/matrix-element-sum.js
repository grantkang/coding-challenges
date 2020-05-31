
function matrixElementsSum(matrix) {
  let sum = 0;
  const hauntedCols = [].fill(0, 0, matrix[0].length);
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        hauntedCols[col] = 1;
      }
      if (!hauntedCols[col]) {
        sum += matrix[row][col];
      }
    }
  }
  return sum;
}
