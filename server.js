require('dotenv').config();
const connectDB = require('./config/connect_db');
connectDB();

const express = require('express');
const app = express();
app.use(express.json());

const {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
} = require('./controllers/course_controllers');


app.post('/api/course/post', createCourse);
app.get('/api/course/get', getCourses);
app.put('/api/course/update', updateCourse);
app.delete('/api/course/delete', deleteCourse);


app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});