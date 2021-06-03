function power(a, b) {
	if (b < 0) {
		throw new Error("exponent is less than zero")
	}
	else if (a == 0 && b == 0) {
		throw new Error("0^0 is not supported")
	}
	
	if (a == 0) {
		return 0
	}
	if (b == 0) {
		return 1
	}

	if (b == 1) {
		return a
	}

	if (b % 2 == 0) {
		return power(a * a, b / 2)
	}

	return a * power(a, b - 1)
}

function add(a, b) {
	return a + b
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

module.exports = {
	ops: {
		power: {
			fn: power,
			args: 2,
			opToStr: function(a, b) { return `${a} ^ ${b}` }
		},
		add: {
			fn: add,
			args: 2,
			opToStr: function(a, b) { return `${a} + ${b}`}
		},
		subtract: {
			fn: subtract,
			args: 2,
			opToStr: function(a, b) { return `${a} - ${b}`}
		},
		multiply: {
			fn: multiply,
			args: 2,
			opToStr: function(a, b) { return `${a} * ${b}` }
		}
	},
}