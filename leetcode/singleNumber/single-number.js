/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const numMap = {};
  for (const num of nums) {
    const key = '' + num;
    if (numMap[key] === undefined) {
      numMap[key] = true;
    } else if (numMap[key] === true) {
      delete numMap[key];
    }
  }
  return Object.keys(numMap)[0];
};
