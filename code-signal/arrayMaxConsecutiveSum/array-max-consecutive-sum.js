
function arrayMaxConsecutiveSum(inputArray, k) {
	    let sum = 0;
	    let max = 0;
	    const queue = [];
	    for(const num of inputArray) {
		            queue.push(num);
		            sum+= num;
		            if(queue.length > k) {
				                sum -= queue.shift();
				            }
		            max = Math.max(max, sum);
		        }
	    return max;
}

