const express = require("express");

const app = express();
const PORT = 5000;

// Question 12: GET /users/:name
const users = [
    {"id": 1, "name": "Raman", "email": "raman@gmail.com"},
    {"id": 2, "name": "Ajay", "email": "ajay@gmail.com"},
    {"id": 3, "name": "Ramanjay", "email": "ramanjay@gmail.com"}
];

app.get("/users/:name", (req, res) => {
    const name = req.params.name;
    const result = users.find((item) => item.name.toLowerCase() === name.toLowerCase());

    if (!result) {
        return res.status(404).json({ message: "Record not found" });
    }

    res.json(result);
});

app.listen(PORT, () => {
    console.log("Question 12 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/users/Raman");
});
