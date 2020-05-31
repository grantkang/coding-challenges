
function growingPlant(upSpeed, downSpeed, desiredHeight) {
	    let height = 0;
	    let days = 0;
	    while(height < desiredHeight) {
		            height += days % 1 === 0 ? upSpeed : -downSpeed;
		            days += .5;
		        }
	    return Math.ceil(days);
}

