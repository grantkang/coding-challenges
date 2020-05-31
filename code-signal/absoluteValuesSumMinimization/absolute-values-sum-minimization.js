
function absoluteValuesSumMinimization(a) {
  const cache = {};
  let minSum = null;
  let min = null;
  for (const num1 of a) {
    if (!cache['' + num1]) {
      cache['' + num1] = true;
      let absSum = 0;
      for (const num2 of a) {
        absSum += Math.abs(num2 - num1);
      }
      if (minSum === null || absSum < minSum) {
        minSum = absSum;
        min = num1;
      }
    }
  }
  return min;
}
