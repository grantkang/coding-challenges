function extractEachKth(inputArray, k) {
  for (let i = inputArray.length - 1; i >= 0; i--) {
    if ((i + 1) % k === 0) {
      inputArray.splice(i, 1);
    }
  }
  return inputArray;
}
