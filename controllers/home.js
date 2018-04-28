const config = require('../config')

module.exports = async (req, res) => {
  return res.render('home', { app: config.app, query: req.query })
}
