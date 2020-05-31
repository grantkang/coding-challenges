function differentSymbolsNaive(s) {
  const charMap = {};
  for (const char of s) {
    if (!charMap[char]) {
      charMap[char] = true;
    }
  }
  return Object.keys(charMap).length;
}
