const express = require("express");

const app = express();
const PORT = 5000;

// Question 3: GET /products
const products = [
    {"id": 11, "name": "Mouse", "price": 800},
    {"id": 12, "name": "Keyboard", "price": 1200}
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log("Question 3 server running at http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/products");
});
