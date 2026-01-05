import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';


const app = express();

app.use(cors());

app.use(express.json());


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Pass@123',
    database:'task_app'
});


db.connect(err =>{
    if(err){
        console.log('Database connection error:', err);
    }else{
        console.log('Connected to the database');
    };
})