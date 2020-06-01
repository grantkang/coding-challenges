function longestDigitsPrefix(inputString) {
	let digitsPrefix = '';
	for(const char of inputString) {
		const number = parseInt(char, 10);
		if(!isNaN(number)) digitsPrefix += number;
		else break;
	}
	return digitsPrefix;
}
