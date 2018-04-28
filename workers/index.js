const schedule = require('node-schedule')
const refreshCache = require('./refreshCache')
module.exports = () => {
  console.log('Starting background workers...')
  const refreshCacheJob = schedule.scheduleJob('*/1 * * * *', refreshCache)

  return { refreshCacheJob }
}
