const { Router } = require("express");
const router = Router();

const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db");

const jwt = require ('jsonwebtoken');
const {JWT_SECRET} = require("../config.js");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const isValidated = await Admin.findOne({
        username,
        password
    })
    if(isValidated) {
        const token = jwt.sign ({
            username
        }, JWT_SECRET)
        res.json({
            token
        })
    }   else {
        res.status(403).json({
            message: "Invalid email and password"
        })
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    });
    console.log(newCourse);
        res.json({
            message: "Course created successfully", Course_id: newCourse._id
        })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
        res.json({
            course: allCourses
        })  
});

module.exports = router;