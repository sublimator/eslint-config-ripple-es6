var test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  var CLIEngine = require('eslint').CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc'
  })

  var code = '\'use strict\';\nconst foo = 1;\nconsole.log(foo);\n'
  console.log(JSON.stringify(cli.executeOnText(code)))

  t.ok(cli.executeOnText(code).errorCount === 0)
  t.end()
})
