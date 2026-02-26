const express = require('express')
const route = express.Router()

const siteControllers = require('../app/controllers/SiteController')

route.use('/search', newsController.search)
route.use('/', newsController.index)

module.exports = route