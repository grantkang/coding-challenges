
function reverseInParentheses(inputString) {
  return reverseHelper(inputString.split('')).join('');
}

function reverseHelper(arr) {
  let result = [];
  while (arr.length) {
    const char = arr.shift();
    if (char === '(') {
      result = result.concat(reverseHelper(arr))
    } else if (char === ')') {
      return result.reverse();
    } else {
      result.push(char);
    }
  }
  return result;
}
