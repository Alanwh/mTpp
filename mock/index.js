const express = require('express')
const cityJson = require('./city.json');
const apiRoutes = express.Router()

apiRoutes.use('/city', (req, res) => {
  res.send(cityJson)
})

module.exports = apiRoutes;