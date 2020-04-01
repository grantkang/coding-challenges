
function reverseInParentheses(inputString) {
  let reversedInParentheses = '';
  let stack = [];
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charAt(i);
    if (stack.length) {
      if (char === ')') {
        let reversed = [];
        while (stack[stack.length - 1] !== '(') {
          reversed.push(stack.pop());
        }
        stack.pop();
        stack = stack.concat(reversed);
        if (!stack.includes('(')) {
          while (stack.length) reversedInParentheses += stack.shift();
        }
      } else {
        stack.push(char);
      }
    } else {
      if (char === '(') {
        stack.push(char);
      } else {
        reversedInParentheses += char;
      }
    }
  }
  return reversedInParentheses;
}
