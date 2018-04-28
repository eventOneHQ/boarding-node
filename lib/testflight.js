const Testflight = require('add-testflight-user')

const config = require('../config')

module.exports = new Testflight(
  config.itcUser,
  config.itcPassword,
  config.app.adamId,
  config.itcAppTesterGroup
)
