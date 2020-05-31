
function almostIncreasingSequence(sequence) {
  let removedOne = 0;
  let i = 1;
  while (i < sequence.length) {
    const prevPrev = sequence[i - 2];
    const prev = sequence[i - 1];
    const cur = sequence[i];
    if (cur <= prev) {
      if (removedOne++) return false;
      if (!prevPrev || cur > prevPrev) {
        sequence.splice(i - 1, 1);
      } else {
        sequence.splice(i, 1);
      }
    } else {
      i++;
    }
  }
  return true;
}
