const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs= require('fs');
const fileUpload = require('express-fileupload');
var mysql = require('mysql');

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var dbConnect = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'doctormanagement'
})
dbConnect.connect();
app.post('/addappointment', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const gender = req.body.gender;
    const age = req.body.age;
    const weight = req.body.weight;
    const time = req.body.time;
    const date = req.body.date;

    dbConnect.query('insert into appointmentlist (name,phone,email,gender,age,weight,time,date) values(?,?,?,?,?,?,?,?)',[name,phone,email,gender,age,weight,time,date], function (error,result){
        return res.send({messege:'hellow'});
    })

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})