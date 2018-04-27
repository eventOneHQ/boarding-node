const config = require('../config')

module.exports = async () => {
  const ItcClient = require('itc-airship').Client
  const itc = new ItcClient()

  await itc.login(config.itcUser, config.itcPassword)

  const apps = await itc.fetchAllApps()

  const app = apps.filter(app => app.adamId === config.itcAppId)

  return app[0]
}
