const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON data

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'game'
});

// Test route
app.get('/', (req, res) => {
    return res.json("From backend side");
});


// Add a new user (Signup)
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body; // Extract data from request body
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
        if (err) return res.json(err);
        return res.json("User registered successfully!");
    });
});

// Start the server
app.listen(8081, () => {
    console.log("listening on port 8081");
});