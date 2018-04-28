const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')

const config = require('./config')

module.exports = app => {
  // Use body parser so we can get info from POST and/or URL parameters
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  app.use(bodyParser.json())

  // Use morgan to log requests to the console
  app.use(morgan('dev'))

  app.engine(
    '.hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main'
    })
  )
  app.set('view engine', '.hbs')

  app.use('/assets', express.static(path.join(__dirname, '../public')))

  app.locals.gaPropertyId = config.gaPropertyId
  app.locals.privacyUrl = config.privacyUrl
  app.locals.authToken = config.authToken
}
