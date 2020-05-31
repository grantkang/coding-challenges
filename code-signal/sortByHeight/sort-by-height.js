
function sortByHeight(a) {
  const nonTrees = a.filter(el => el !== -1);
  nonTrees.sort((a, b) => a > b ? 1 : -1);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) a[i] = nonTrees.shift();
  }
  return a;
}
