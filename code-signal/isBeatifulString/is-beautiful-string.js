function isBeautifulString(inputString) {
  const charCount = new Array(26).fill(0, 0, 26);
  const start = 'a'.charCodeAt(0)
  for (const char of inputString) {
    charCount[char.charCodeAt(0) - start]++;
  }
  let max = charCount[0];
  for (const count of charCount) {
    if (max < count) return false;
    max = count;
  }
  return true;
}
