
function commonCharacterCount(s1, s2) {
    let count = 0;
    const charCount1 = new Array(256).fill(0);
    const charCount2 = new Array(256).fill(0);
    for(const letter of s1.split('')) {
        charCount1[letter.charCodeAt(0)]++;
    }
    for(const letter of s2.split('')) {
        charCount2[letter.charCodeAt(0)]++;
    }
    for(let i = 0; i < 256; i++) {
        count += Math.min(charCount1[i],charCount2[i]);
    }
    return count;
}
