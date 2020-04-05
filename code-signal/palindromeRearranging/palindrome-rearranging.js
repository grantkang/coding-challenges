
function palindromeRearranging(inputString) {
  const charCount = {};
  let hasOdd = false;
  for (const letter of inputString) {
    if (charCount[letter] === undefined) {
      charCount[letter] = 0;
    }
    charCount[letter]++;
  }
  for (const char in charCount) {
    if (charCount[char] % 2 !== 0) {
      if (hasOdd) return false;
      hasOdd = true;
    }
  }
  return true;
}
