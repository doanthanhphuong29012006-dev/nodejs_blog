const express = require('express');
const route = express.Router();

const siteControllers = require('../app/controllers/SiteController');

route.get('/search', siteControllers.search);
route.get('/', siteControllers.index);

module.exports = route;
