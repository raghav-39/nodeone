// Common JS, every file is a module in node.js by default
// Module --> this is the encapsulated code (only share minimum)\

const names = require('./21_modules')
const func = require('./22_modules')
require('./23_modules') // since we left a function to get called there in that module it is getting called here
func(names.john)
func(names.peter)
func("Raghav")