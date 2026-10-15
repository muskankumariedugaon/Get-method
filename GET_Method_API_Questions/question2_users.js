const express = require("express");

const app = express();
const PORT = 5000;

// Question 2: GET /users
const users = [
    {"id": 1, "name": "Raman", "email": "raman@gmail.com"},
    {"id": 2, "name": "Ajay", "email": "ajay@gmail.com"}
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log("Question 2 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/users");
});
