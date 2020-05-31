
function reverseVowelsOfString(s) {
  const strArr = s.split('');
  const vowels = [];
  const vowelCheck = 'aeiouAEIOU';
  for (const char of strArr) {
    if (vowelCheck.includes(char)) {
      vowels.push(char);
    }
  }
  for (let i = 0; i < strArr.length; i++) {
    if (vowelCheck.includes(strArr[i])) {
      strArr[i] = vowels.pop();
    }
  }
  return strArr.join('');
}
