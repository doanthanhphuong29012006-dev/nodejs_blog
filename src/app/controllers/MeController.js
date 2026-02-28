const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');
const course = require('../models/Course')

class MeController {
    // MeController.js
stored(req, res, next) {
    Course.find({})
        .then(courses => {
            res.render('me/stored-courses', {
                //courses: courses.map(course => course.toObject())
                courses: multipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }
}

module.exports = new MeController();
