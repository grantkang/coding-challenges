function bishopAndPawn(bishop, pawn) {
  const rowDiff = Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0));
  const colDiff = Math.abs(bishop.charCodeAt(1) - pawn.charCodeAt(1));
  return rowDiff === colDiff;
}
