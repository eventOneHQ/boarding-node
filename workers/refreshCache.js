const config = require('../config')
const getApp = require('../lib/getApp')

module.exports = async fireDate => {
  console.time('cache-refresh')
  config.app = await getApp()
  console.timeEnd('cache-refresh')
}
