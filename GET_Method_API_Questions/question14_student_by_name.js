const express = require("express");

const app = express();
const PORT = 5000;

// Question 14: GET /students/:name
const students = [
    {"roll": 101, "name": "Ajay", "marks": 88},
    {"roll": 102, "name": "Raman", "marks": 76},
    {"roll": 103, "name": "Amu", "marks": 92}
];

app.get("/students/:name", (req, res) => {
    const name = req.params.name;
    const result = students.find((item) => item.name.toLowerCase() === name.toLowerCase());

    if (!result) {
        return res.status(404).json({ message: "Record not found" });
    }

    res.json(result);
});

app.listen(PORT, () => {
    console.log("Question 14 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/students/Ajay");
});
