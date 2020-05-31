
function addBorder(picture) {
	const boredered = [];
	const topBottom = '*'.repeat(picture[0].length + 2);
	boredered.push(topBottom);
	for(let i = 0; i < picture.length; i++) {
		boredered.push('*' + picture[i] + '*');
	}
	boredered.push(topBottom);
	return boredered;
}
