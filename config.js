const env = process.env

require('dotenv').config()

const config = {
  itcUser: env.ITC_USER,
  itcPassword: env.ITC_PASSWORD,
  itcAppId: env.ITC_APP_ID,
  itcAppTesterGroup: env.ITC_APP_TESTER_GROUP,
  gaPropertyId: env.GA_PROPERTY_ID,
  appName: env.APP_NAME,
  privacyUrl: env.PRIVACY_URL,
  port: env.PORT || 3000
}

module.exports = config
