const express = require("express");

const app = express();
const PORT = 5000;

// Question 11: GET /orders/:id
const orders = [
    {"id": 101, "item": "Laptop", "amount": 50000},
    {"id": 102, "item": "Mobile", "amount": 15000},
    {"id": 103, "item": "Tablet", "amount": 25000}
];

app.get("/orders/:id", (req, res) => {
    const id = Number(req.params.id);
    const result = orders.find((item) => item.id === id);

    if (!result) {
        return res.status(404).json({ message: "Record not found" });
    }

    res.json(result);
});

app.listen(PORT, () => {
    console.log("Question 11 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/orders/101");
});
