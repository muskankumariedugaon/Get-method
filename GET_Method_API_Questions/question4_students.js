const express = require("express");

const app = express();
const PORT = 5000;

// Question 4: GET /students
const students = [
    {"roll": 101, "name": "Ajay", "marks": 88},
    {"roll": 102, "name": "Raman", "marks": 76}
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(PORT, () => {
    console.log("Question 4 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/students");
});
