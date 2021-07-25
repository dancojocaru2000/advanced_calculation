const express = require('express')
const calculate = require('./calculate')

const apiRouter = express.Router()

/**
 * @typedef Operation
 * @type {object}
 * @property {!number} args
 * @property {OperationExecutor} fn
 * @property {OperationToString} opToStr
 */

/**
 * @callback OperationExecutor
 * @param {...number} args
 * @returns {number}
 */

/**
 * @callback OperationToString
 * @param {...number} args
 * @returns {string}
 */

apiRouter.get('/calculate/:op', (req, res) => {
	const op = req.params.op
	/**
	 * @type {Operation}
	 */
	const operation = calculate.ops[op]
	if (!operation) {
		res.status(404).send({
			status: 'error',
			message: `Operation ${op} not found`
		})
		return
	}

	const strParams = Array(operation.args).fill(null).map((_, idx) => parseInt(req.query[`param${idx}`]))
	const validParamsCount = strParams.filter(x => x || x === 0).length
	if (validParamsCount !== operation.args) {
		res.statusMessage = 'Unprocessable Entity'
		res.status(422).send({
			status: 'error',
			message: `Expected ${operation.args} parameters, got ${validParamsCount}`,
			expected: strParams.length,
			got: validParamsCount,
		})
		return
	}

	res.send({
		status: 'ok',
		result: operation.fn.apply(null, strParams),
		opStr: operation.opToStr.apply(null, strParams),
	})
})

module.exports = apiRouter
