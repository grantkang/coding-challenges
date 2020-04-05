
function areSimilar(a, b) {
  if (a.length !== b.length) return false;

  const diffIndices = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diffIndices.push(i);
  }

  if (diffIndices.length === 0) {
    return true;
  } else if (diffIndices.length === 2) {
    const [diffIndex1, diffIndex2] = diffIndices;
    return a[diffIndex1] === b[diffIndex2] && a[diffIndex2] === b[diffIndex1];
  } else {
    return false;
  }
}
