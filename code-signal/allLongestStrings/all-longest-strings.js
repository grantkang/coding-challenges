
function allLongestStrings(inputArray) {
  inputArray.sort((str1, str2) => str1.length <= str2.length ? 1 : -1);
  const longestLength = inputArray[0].length;
  const longestStrings = [];
  for (const string of inputArray) {
    if (string.length === longestLength) {
      longestStrings.push(string);
    }
  }
  return longestStrings;
}
