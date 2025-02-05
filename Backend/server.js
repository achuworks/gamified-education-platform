const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'game'
});


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {  // Removed req.body.email
        if (err) {
            console.error(err);
            return res.status(500).json("Internal server error");
        }
        if (data.length > 0) {
            return res.status(200).json("Login successful");
        } else {
            return res.status(401).json("No record found");
        }
    });
});



app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    const checkUserSql = "SELECT * FROM users WHERE email = ?";
    db.query(checkUserSql, [email], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Internal server error");
        }
        if (data.length > 0) {
            return res.status(400).json("User already exists with this email");
        } else {
            const insertSql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            db.query(insertSql, [username, email, password], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json("Error inserting user");
                }
                return res.status(200).json("Signup successful");
            });
        }
    });
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});