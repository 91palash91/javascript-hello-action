const core = require('@actions/core')
const io = require('@actions/io')

const getTime = core.getInput('milliseconds')

console.log('Input is $milliseconds')

async function build(params) {
  await io.mkdirP(`/tmp/abc`)
}

build()
