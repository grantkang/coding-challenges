
function alphabeticShift(inputString) {
  let outputString = '';

  const minCode = 'a'.charCodeAt(0);
  const lettersInAlphabet = 26;

  for (let i = 0; i < inputString.length; i++) {
    const nextCharCodeFromA = (inputString.charCodeAt(i) + 1 - minCode) % lettersInAlphabet;
    outputString += String.fromCharCode(nextCharCodeFromA + minCode);
  }

  return outputString;
}
