const Course = require('../models/course');

// @route /api/course/post
const createCourse = async (req, res) => {
    if(!req.body.name || !req.body.author) res.status(404).send("Not found");

    const course = await Course.create({
        name: req.body.name,
        author: req.body.author,
        isPublished: true
    })
    res.status(200).json(course)
}

// @route /api/course/get
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

// @route /api/course/put
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.body._id, {name: req.body.name, author: req.body.author })
        res.status(200).json(course)
    }
    catch (error) {
        res.status(404).send(error.message);
    }

}

// @route /api/course/delete
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.body._id, {name: req.body.name, author: req.body.author })
        res.status(200).json(course)
    }
    catch (error) {
        res.status(404).send(error.message);
    }
}


module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
}