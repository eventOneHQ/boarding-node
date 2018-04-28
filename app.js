const express = require('express')
const startup = require('./config/startup')

startup()
  .then(() => {
    require('./workers')()
    const config = require('./config')
    const app = express()

    require('./config/express')(app)

    const router = require('./config/router')()

    app.use('/', router)

    app.listen(config.port, () => {
      console.log(`App listening at: http://localhost:${config.port}`)
    })
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
