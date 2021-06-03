const {describe, it} = require('mocha')
const assert = require('assert');

const calculate = require('../src/calculate');
const { randomInt } = require('crypto');

describe('power:', function () {
	const power = calculate.ops.power.fn;
	it('0^0 should throw', function () {
		assert.throws(function() { power(0, 0) })
	})
	it('negative exponent should throw', function () {
		assert.throws(function() { power(2, -3) })
	})
	it('2^0 == 1', function () {
		assert.strictEqual(power(2, 0), 1)
	})
	it('0^2 == 0', function () {
		assert.strictEqual(power(0, 2), 0)
	})
	it('2^3 == 8', function () {
		assert.strictEqual(power(2, 3), 8)
	})
	it('3^2 == 9', function () {
		assert.strictEqual(power(3, 2), 9)
	})
})

describe('add:', function () {
	const add = calculate.ops.add.fn

	it('any + 0 => any', function () {
		assert.strictEqual(add(2, 0), 2)
	})

	it('0 + any => any', function () {
		assert.strictEqual(add(0, 2), 2)
	})
	
	it('x + y => y + x', function () {
		const x = randomInt(1, 1000)
		const y = randomInt(1, 1000)
		assert.strictEqual(add(x, y), add(y, x))
	})
})

describe('subtract:', function () {
	const subtract = calculate.ops.subtract.fn

	it('any - 0 => any', function () {
		assert.strictEqual(subtract(2, 0), 2)
	})

	it('0 - any => -any', function () {
		assert.strictEqual(subtract(0, 2), -2)
	})
	
	it('x - y = z => y + z = x', function () {
		const x = randomInt(1, 1000)
		const y = randomInt(1, 1000)
		const z = subtract(x, y)
		assert.strictEqual(y + z, x)
	})
})