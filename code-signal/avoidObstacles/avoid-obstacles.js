
function avoidObstacles(inputArray) {
  inputArray = inputArray.sort();
  let jumpLength = 2;
  while (!canPass(inputArray, jumpLength)) {
    jumpLength++;
  }
  return jumpLength;
}

function canPass(inputArray, num) {
  if (num <= 1) return false;
  for (const obstacle of inputArray) {
    if (obstacle % num === 0) return false;
  }
  return true;
}
