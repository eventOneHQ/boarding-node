const ItcClient = require('itc-airship').Client

const config = require('../config')

const itc = new ItcClient()

module.exports = async () => {
  await itc.login(config.itcUser, config.itcPassword)
  const apps = await itc.fetchAllApps()

  const app = apps.filter(
    app => config.itcAppId === app.adamId || config.itcAppId === app.bundleId
  )

  return app[0]
}
