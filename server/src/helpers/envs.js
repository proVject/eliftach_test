const path = require('path')

const getMode = () => {
  const mode = process.argv.find(arg => arg.startsWith('--mode='));

  if (mode) {
    return mode.split('=')[1]
  } else {
    return 'production'
  }
}

module.exports = () => {
  const mode = getMode()
  const envFile = mode === 'development' ? '.env.development' : '.env'
  const envFilePath = path.resolve(process.cwd(), envFile)

  require('dotenv').config({
    path: envFilePath
  })
}