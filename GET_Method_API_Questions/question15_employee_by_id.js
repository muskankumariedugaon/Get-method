const express = require("express");

const app = express();
const PORT = 5000;

// Question 15: GET /employees/:id
const employees = [
    {"id": 1, "name": "Raman", "dept": "HR"},
    {"id": 2, "name": "Ajay", "dept": "IT"},
    {"id": 3, "name": "Neha", "dept": "Finance"}
];

app.get("/employees/:id", (req, res) => {
    const id = Number(req.params.id);
    const result = employees.find((item) => item.id === id);

    if (!result) {
        return res.status(404).json({ message: "Record not found" });
    }

    res.json(result);
});

app.listen(PORT, () => {
    console.log("Question 15 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/employees/1");
});
