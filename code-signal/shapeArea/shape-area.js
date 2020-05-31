
function shapeArea(n) {
  let base = 1;
  let top = 0;
  for (let i = 1; i < n; i++) {
    top = base + top;
    base += 2;
  }
  return base + top * 2;
}
