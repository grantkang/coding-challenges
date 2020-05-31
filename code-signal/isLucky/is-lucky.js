
function isLucky(n) {
  const nString = n + '';
  let difference = 0;
  for (let i = 0; i < nString.length / 2; i++) {
    difference += Number(nString[i]) - Number(nString[nString.length - 1 - i]);
  }
  return !difference;
}
