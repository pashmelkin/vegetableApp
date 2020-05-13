const router = require('express').Router()
const veggiesReader = require('../middleware/readVeggies')

router.get('/', function (req, res, next) {
  res.send(veggiesReader.readVeggies())
})

module.exports = router
