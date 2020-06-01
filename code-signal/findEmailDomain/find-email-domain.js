function findEmailDomain(address) {
  const charArray = [];
  for (let i = address.length - 1; i >= 0; i--) {
    const current = address.charAt(i);
    if (current === '@') {
      return charArray.join('');
    }
    charArray.unshift(current);
  }
}
