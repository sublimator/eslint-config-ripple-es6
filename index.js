var fs = require('fs')
var yaml = require('js-yaml')
var path =  __dirname + '/./eslintrc'
module.exports = yaml.safeLoad(fs.readFileSync(path, 'utf8'))
