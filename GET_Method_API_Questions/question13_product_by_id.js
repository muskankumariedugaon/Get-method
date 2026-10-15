const express = require("express");

const app = express();
const PORT = 5000;

// Question 13: GET /products/:id
const products = [
    {"id": 11, "name": "Mouse", "price": 800},
    {"id": 12, "name": "Keyboard", "price": 1200},
    {"id": 13, "name": "Monitor", "price": 7500}
];

app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const result = products.find((item) => item.id === id);

    if (!result) {
        return res.status(404).json({ message: "Record not found" });
    }

    res.json(result);
});

app.listen(PORT, () => {
    console.log("Question 13 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/products/11");
});
