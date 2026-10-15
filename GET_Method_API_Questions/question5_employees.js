const express = require("express");

const app = express();
const PORT = 5000;

// Question 5: GET /employees
const employees = [
    {"id": 1, "name": "Raman", "dept": "HR"},
    {"id": 2, "name": "Ajay", "dept": "IT"}
];

app.get("/employees", (req, res) => {
    res.json(employees);
});

app.listen(PORT, () => {
    console.log("Question 5 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/employees");
});
