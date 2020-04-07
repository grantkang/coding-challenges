
function variableName(name) {
  if (name.charAt(0) >= '0' && name.charAt(0) <= '9') return false;
  return name.split('')
    .filter(letter => letter !== '_')
    .filter(letter => letter.toLowerCase() < 'a' || letter.toLowerCase() > 'z')
    .filter(letter => letter < '0' || letter > '9')
    .length === 0;
}
