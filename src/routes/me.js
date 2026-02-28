const express = require('express');
const route = express.Router();

const meController = require('../app/controllers/MeController');

route.get('/stored/courses', meController.stored);
//route.use('/', courseController.index);

module.exports = route;
