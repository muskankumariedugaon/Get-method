const express = require("express");

const app = express();
const PORT = 5000;

// Question 6: GET /books
const books = [
    {"id": 201, "title": "Swift Basics", "author": "Apple"},
    {"id": 202, "title": "Node.js Mastery", "author": "Ryan Dahl"}
];

app.get("/books", (req, res) => {
    res.json(books);
});

app.listen(PORT, () => {
    console.log("Question 6 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/books");
});
