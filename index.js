const express = require ('express');
let mysql = require ('mysql2');
const app = express ();
const port = 3000;
app.use(express.json());
app.use (express.urlencoded({extended: true}));

app.get ('/', (req, res)=> {
    res.send('Hello World');
});



app.listen (port,() => {
    console.log(`Server is Running on port ${port}`);
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gyan1234',
    database: 'hollywood',
    port:  '3307'
});

db.connect((err)=> {
    if (err){
        console.error('Error Connecting to MYSQL:' + err.stack);
        return;
    }
    console.log('Connection Succesfully');
});


