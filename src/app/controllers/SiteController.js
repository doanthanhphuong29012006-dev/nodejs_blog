const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');
const course = require('../models/Course')

class SiteController {
    //[GET]/
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                //courses = courses.map(course =>  course.toObject());
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    //[GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
