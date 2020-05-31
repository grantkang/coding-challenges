/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
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

  helper(nums);
  return result;
};
