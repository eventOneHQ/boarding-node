const express = require('express')
const router = express.Router()

const homeCtrl = require('../controllers/home')
const submitCtrl = require('../controllers/submit')

module.exports = () => {
  // GET /
  router.get('/', homeCtrl)

  // POST /submit
  router.post('/submit', submitCtrl)

  // GET /submit
  router.get('/submit', submitCtrl)

  return router
}
