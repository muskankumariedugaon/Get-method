const express = require("express");

const app = express();
const PORT = 5000;

// Question 7: GET /movies
const movies = [
    {"id": 1, "name": "Inception", "rating": 9},
    {"id": 2, "name": "Interstellar", "rating": 8}
];

app.get("/movies", (req, res) => {
    res.json(movies);
});

app.listen(PORT, () => {
    console.log("Question 7 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/movies");
});
