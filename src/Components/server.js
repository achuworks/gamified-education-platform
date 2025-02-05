const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "game",
  });
  
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});
app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
      if (err) {
        res.status(500).send({ message: "Error inserting user" });
      } else {
        res.status(200).send({ message: "User registered successfully" });
      }
    });
  });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});