
function boxBlur(image) {
  const arr = [];
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];
  for (let row = 1; row < image.length - 1; row++) {
    const toBeAdded = [];
    for (let col = 1; col < image[0].length - 1; col++) {
      let pixelSum = 0;
      for (const direction of directions) {
        const [rd, cd] = direction;
        pixelSum += image[row + rd][col + cd];
      }
      toBeAdded.push(Math.floor(pixelSum / 9));
    }
    arr.push(toBeAdded);
  }
  return arr;
}
