
function arrayChange(inputArray) {
  let moves = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      const difference = inputArray[i - 1] - inputArray[i];
      inputArray[i] += difference + 1;
      moves += difference + 1;
    }
  }
  return moves;
}
