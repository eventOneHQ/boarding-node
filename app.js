const express = require('express')
const Testflight = require('add-testflight-user')
const config = require('./config')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

const getApp = require('./lib/getApp')

const tf = new Testflight(
  config.itcUser,
  config.itcPassword,
  config.itcAppId,
  config.itcAppTesterGroup
)

const app = express()

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

app.use('/assets', express.static('assets'))

app.locals.gaPropertyId = config.gaPropertyId
app.locals.privacyUrl = config.privacyUrl
app.locals.authToken = config.authToken

app.get('/', async (req, res) => {
  const app = await getApp()
  return res.render('home', { app, query: req.query })
})

const submitCtrl = async (req, res) => {
  const email = req.body.email || req.query.email
  const firstName = req.body.firstName || req.query.firstName
  const lastName = req.body.lastName || req.query.lastName
  const token = req.body.token || req.query.token

  try {
    const app = await getApp()

    if (config.authToken && config.authToken !== token) {
      return res.status(401).render('submit', {
        app,
        alertType: 'danger',
        message:
          'Invalid password given, please contact the application owner and <a href="/">try again</a>. '
      })
    }
    await tf.addTester(email, firstName, lastName)

    return res.render('submit', {
      app,
      alertType: 'success',
      message:
        'Successfully added you as a tester. Check your email inbox for an invite'
    })
  } catch (err) {
    console.log(err)
    return res.status(500).render('submit', {
      app,
      alertType: 'danger',
      message: 'Something went wrong, please contact the application owner'
    })
  }
}

app.post('/submit', submitCtrl)
app.get('/submit', submitCtrl)

app.listen(config.port, () => {
  console.log(`App listening at: http://localhost:${config.port}`)
})
