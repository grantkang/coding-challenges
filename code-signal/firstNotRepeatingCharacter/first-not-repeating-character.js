
function firstNotRepeatingCharacter(s) {
  for (const ch of s) {
    if (s.indexOf(ch) === s.lastIndexOf(ch)) {
      return ch;
    }
  }
  return '_';
}
