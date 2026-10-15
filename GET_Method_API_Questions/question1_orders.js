const express = require("express");

const app = express();
const PORT = 5000;

// Question 1: GET /orders
const orders = [
    {"id": 101, "item": "Laptop", "amount": 50000},
    {"id": 102, "item": "Mobile", "amount": 15000}
];

app.get("/orders", (req, res) => {
    res.json(orders);
});

app.listen(PORT, () => {
    console.log("Question 1 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/orders");
});
