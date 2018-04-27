const config = require('../config')

module.exports = async () => {
  try {
    const ItcClient = require('itc-airship').Client
    const itc = new ItcClient()

    await itc.login(config.itcUser, config.itcPassword)

    const apps = await itc.fetchAllApps()

    const app = apps.filter(
      app => config.itcAppId === app.adamId || config.itcAppId === app.bundleId
    )

    return app[0]
  } catch (err) {
    throw new Error(err)
  }
}
