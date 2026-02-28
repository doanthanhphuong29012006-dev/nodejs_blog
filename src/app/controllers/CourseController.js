const { mongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');
const course = require('../models/Course')

class CourseController {
    //[GET]/courses:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => res.render('course/show', {
                course: mongooseToObject(course)
            }))
            .catch(next)
    }

    create(req, res, next) {
        res.render('course/create')
    }
    
    //[POST]
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }

    //[PUT]//:id/edit
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('course/edit', {
                    course: mongooseToObject(course)
                }
            ))
            .catch(next)
    }

    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
}


module.exports = new CourseController();
