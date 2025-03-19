const mysql = require('mysql') 

const db = mysql.createConnection ({
     host : "localhost",
     user : "root",
     password : "",
     databes : "mahasiswa"
})

module.exports = db 

