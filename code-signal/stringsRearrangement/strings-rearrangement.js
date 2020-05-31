function stringsRearrangement(inputArray) {
  const combinations = permute(inputArray);
  const result = combinations.reduce((acc, combination) => {
    for (let ai = 0; ai < combination.length - 1; ai++) {
      const word1 = combination[ai];
      const word2 = combination[ai + 1];
      let difference = false;

      if (word1.length !== word2.length) return acc || false;
      for (let wi = 0; wi < word1.length; wi++) {
        if (word1.charAt(wi) !== word2.charAt(wi)) {
          if (difference) {
            return acc || false;
          }
          difference = true;
        }
      }
      if (!difference) return acc || false;
    }
    return true;
  }, false);
  return result;
}

function permute(inputArray) {
  const result = [];
  const permutation = [];

  const helper = (arr) => {
    if (arr.length === 0) {
      result.push(permutation.slice());
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        permutation.push(current);
        const other = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
        helper(other);
        permutation.pop();
      }
    }
  }

  helper(inputArray);
  return result;
}
