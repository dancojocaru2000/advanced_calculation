const express = require('express')
const fs = require('fs')
const calculate = require('./calculate')

const app = express()

app.set('view engine', 'pug')

function getOperations() {
	return Object.keys(calculate.ops)
}

function getJenkinsBuildNumber() {
	if (fs.existsSync('./jenkins.txt')) {
		return fs.readFileSync('./jenkins.txt')
	}
}

const apiRouter = require('./api')
app.use('/api', apiRouter)

app.get('/', function (req, res) {
	res.render('index', {
		operations: getOperations(),
		jenkinsBuildNumber: getJenkinsBuildNumber()
	})
})

app.get('/op/:opName', function (req, res, next) {
	const operation = calculate.ops[req.params.opName]
	if (!operation) {
		next()
	}
	else {
		if (req.query.requestCalculation) {
			const params = []
			for (let i = 0; i < operation.args; i++) {
				params.push(parseInt(req.query[`param${i}`]))
			}
			let result
			let err
			try {
				result = {
					value: operation.fn.apply(null, params),
					opstring: operation.opToStr.apply(null, params)
				}
			}
			catch (e) {
				err = e 
			}
			res.render('op', {
				op: {
					name: req.params.opName,
					args: operation.args
				},
				result: result,
				error: err
			})
		}
		else {
			res.render('op', {
				op: {
					name: req.params.opName,
					args: operation.args
				}
			})
		}
	}
})

const port = parseInt(process.env.PORT) || 3000
app.listen(process.env.PORT || 3000, function () {
	console.log(`Started listening on ${port}`)
})