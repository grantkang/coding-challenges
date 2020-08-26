/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = 0;
  let max = Math.max(nums[0], nums[1]);
  let sum = nums[0];
  while (right < nums.length) {
    const current = left === right ? nums[right] : sum + nums[right];
    sum = current;
    max = Math.max(max, current);
    right++;
    if (current <= 0) left = right;
  }
  return max;
};
