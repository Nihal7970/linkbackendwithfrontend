const express = require("express");
const app = express();
const port = 3000;


app.get("/api", (req, res) => {
    const employees = [
        {"name": "Ram", "email": "ram@gmail.com", "age": 23},
        {"name": "Shyam", "email": "shyam23@gmail.com", "age": 28},
        {"name": "John", "email": "john@gmail.com", "age": 33},
        {"name": "Bob", "email": "bob32@gmail.com", "age": 41}
    ];
    res.json(employees);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
