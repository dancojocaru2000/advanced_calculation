const child_process = require('child_process')
const process = require('process')
const fs = require('fs/promises')
const copyDir = require('copy-dir')

function runCommand(command) {
	console.debug(`> ${command}`)
	return child_process.execSync(command)
}

function chdir(path) {
	console.debug(`chdir -> ${path}`)
	process.chdir(path)
}

console.log('Building...')

console.log('1. Svelte app')
console.group()
const sveltePath = 'related/advanced_calculation_svelte'
process.stdout.write(runCommand('npm install', {cwd: sveltePath}))
// process.stdout.write(runCommand('npm run build', {cwd: sveltePath}))
console.debug(`${sveltePath}/public -> public/dynamic`)
copyDir.sync(`${sveltePath}/public`, 'public/dynamic', {
	cover: true
})
console.groupEnd()