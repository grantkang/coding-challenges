
function firstDuplicate(a) {
  const dict = {};
  for (let i = 0; i < a.length; i++) {
    const val = a[i];
    if (!dict['' + val]) {
      dict['' + val] = true;
    } else {
      return val;
    }
  }
  return -1;
}
