const testflight = require('../lib/testflight')
const config = require('../config')

module.exports = async (req, res) => {
  const email = req.body.email || req.query.email
  const firstName = req.body.firstName || req.query.firstName
  const lastName = req.body.lastName || req.query.lastName
  const token = req.body.token || req.query.token

  try {
    if (config.authToken && config.authToken !== token) {
      return res.status(401).render('submit', {
        app: config.app,
        alertType: 'danger',
        message:
          'Invalid password given, please contact the application owner and <a href="/">try again</a>. '
      })
    }
    await testflight.addTester(email, firstName, lastName)

    return res.render('submit', {
      app: config.app,
      alertType: 'success',
      message:
        'Successfully added you as a tester. Check your email inbox for an invite'
    })
  } catch (err) {
    console.log(err)
    return res.status(500).render('submit', {
      app: config.app,
      alertType: 'danger',
      message: 'Something went wrong, please contact the application owner'
    })
  }
}
