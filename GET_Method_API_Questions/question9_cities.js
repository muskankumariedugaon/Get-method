const express = require("express");

const app = express();
const PORT = 5000;

// Question 9: GET /cities
const cities = [
    {"id": 1, "name": "Delhi", "population": "2 Cr"},
    {"id": 2, "name": "Mumbai", "population": "1.8 Cr"}
];

app.get("/cities", (req, res) => {
    res.json(cities);
});

app.listen(PORT, () => {
    console.log("Question 9 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/cities");
});
