
function isIPv4Address(inputString) {
  const sections = inputString.split('.');
  if (sections.length !== 4) return false;

  for (let i = 0; i < sections.length; i++) {
    if (!isValidSection(sections[i])) return false;
  }
  return true;
}

function isValidSection(string) {
  if (string === '' || string[0] === '0' && string.length !== 1) return false;
  const section = Number(string);
  if (!Number.isInteger(section) || section < 0 || section > 255) {
    return false;
  }
  return true;
}
