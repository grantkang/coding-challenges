
function makeArrayConsecutive2(statues) {
  if (statues.length <= 1) return 0;
  const sortedStatues = statues.sort((a, b) => a > b ? 1 : -1);
  let count = 0;
  let prev = sortedStatues[0];
  for (let i = 1; i < sortedStatues.length; i++) {
    while (prev < sortedStatues[i] - 1) {
      count++;
      prev++;
    }
    prev++;
  }
  return count;
}
