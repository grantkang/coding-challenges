function recamanIndex(n) {
  const hashMap = new Map();
  let last = 0;
  for (let i = 0; true; i++) {
    if (last === n) return i;
    const length = i + 1;
    const difference = last - length;
    const summation = last + length;
    last = !hashMap.has(difference) && difference > 0 ? difference : summation;
    hashMap.set(last, length);
  }
}
