
function chessBoardCellColor(cell1, cell2) {
  return isDark(cell1) === isDark(cell2);
}

function isDark(cell) {
  const letterCode = cell.charCodeAt(0) - 'A'.charCodeAt(0);
  const numCode = Number.parseInt(cell.charAt(1));
  return (letterCode + numCode) % 2 !== 0;
}
