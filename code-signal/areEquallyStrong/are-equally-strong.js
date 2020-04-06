
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourDominant = Math.max(yourLeft, yourRight);
  const yourWeaker = Math.min(yourLeft, yourRight);
  const friendsDominant = Math.max(friendsLeft, friendsRight);
  const friendsWeaker = Math.min(friendsLeft, friendsRight);
  return yourDominant === friendsDominant && yourWeaker === friendsWeaker;
}
