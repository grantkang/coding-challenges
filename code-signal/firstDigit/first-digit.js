function firstDigit(inputString) {
  for (const char of inputString) {
    if (!isNaN(parseInt(char, 10))) {
      return char;
    }
  }
}
