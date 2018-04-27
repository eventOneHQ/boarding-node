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

app.get('/', async (req, res) => {
  const app = await getApp()
  return res.render('home', { app })
})

app.post('/submit', async (req, res) => {
  try {
    const app = await getApp()
    const { email, firstName, lastName } = req.body
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
      code: 'InternalServerError',
      alertType: 'danger',
      message: 'An internal server error has occurred'
    })
  }
})

app.listen(config.port, () => {
  console.log(`App listening at: http://localhost:${config.port}`)
})
