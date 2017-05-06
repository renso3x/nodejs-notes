var counter = (function() {
	let privateCtr = 0;
	function changeBy(val) {
		privateCtr += val;
	}

	return {
		inc: function() {
			changeBy(1)
		},
		dec: function() {
			changeBy(-1);
		},
		value: function() {
			return privateCtr;
		}
	}
})()

console.log(counter.value());
counter.inc();
counter.inc();
counter.inc();
console.log(counter.value());
counter.dec();
console.log(counter.value());
