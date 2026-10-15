const express = require("express");

const app = express();
const PORT = 5000;

// Question 8: GET /courses
const courses = [
    {"id": 101, "course": "Web Development", "duration": "3 Months"},
    {"id": 102, "course": "App Development", "duration": "4 Months"}
];

app.get("/courses", (req, res) => {
    res.json(courses);
});

app.listen(PORT, () => {
    console.log("Question 8 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/courses");
});
