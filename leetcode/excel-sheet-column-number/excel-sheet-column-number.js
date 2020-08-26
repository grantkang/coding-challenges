/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber =  s => {
  const start = 'A'.charCodeAt(0) - 1;
  let col = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const multiplier = Math.pow(26, s.length - i - 1)
    const current = (s.charCodeAt(i) - start) * multiplier;
    col += current;
  }
  return col;
};
