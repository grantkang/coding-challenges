
function arrayMaximalAdjacentDifference(inputArray) {
  let maxDifference = Math.abs(inputArray[0] - inputArray[1]);
  for (let i = 1; i < inputArray.length - 1; i++) {
    const difference = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (difference > maxDifference) {
      maxDifference = difference;
    }
  }
  return maxDifference;
}
