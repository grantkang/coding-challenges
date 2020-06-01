function digitDegree(n) {
		let count = 0;
		while(n > 9) {
				n = n.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
				count++;
		}
		return count;
}
