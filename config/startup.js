const getApp = require('../lib/getApp')
const config = require('./config')

module.exports = async () => {
  console.log('Initializing...')

  config.app = await getApp()
}
