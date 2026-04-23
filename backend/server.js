require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Error" });
    }

    res.json({ message: "Success" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});