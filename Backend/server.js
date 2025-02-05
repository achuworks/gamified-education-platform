const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors())
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'game'
})
app.post('/login',(req,res)=>{
    const sql="SELECT * FROM users WHERE username=? AND email=? AND password=?"
    
    db.query(sql,[req.body.username,req.body.email,req.body.password],(err,data)=>{
        if (err) {
            console.error(err); 
            return res.status(500).json("Internal server error");
        }
        if(data.length>0){
            return res.status(200).json("Login successful")
        }else{
            return res.status(401).json("No record found");
        }
    })
})
app.listen(8081,()=>{
    console.log("listening");
})