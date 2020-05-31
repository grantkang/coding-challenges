
function alternatingSums(a) {
  let weight1 = 0;
  let weight2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) weight1 += a[i];
    else weight2 += a[i];
  }
  return [weight1, weight2];
}
