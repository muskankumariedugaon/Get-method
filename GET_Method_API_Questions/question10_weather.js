const express = require("express");

const app = express();
const PORT = 5000;

// Question 10: GET /weather
const weather = [
    {"city": "Delhi", "temp": 30, "condition": "Sunny"},
    {"city": "Kolkata", "temp": 28, "condition": "Cloudy"}
];

app.get("/weather", (req, res) => {
    res.json(weather);
});

app.listen(PORT, () => {
    console.log("Question 10 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/weather");
});
