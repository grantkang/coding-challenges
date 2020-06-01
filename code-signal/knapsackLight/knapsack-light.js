function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (Math.min(weight1, weight2) > maxW) return 0;

  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  } else if (weight1 > maxW) {
    return value2;
  } else if (weight2 > maxW) {
    return value1;
  } else {
    return Math.max(value1, value2);
  }
}
