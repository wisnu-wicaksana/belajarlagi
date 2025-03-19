const express = require('express')
const app = express()
const port = 3000
const db = require('./konekssi'); 




app.get('/', (req, res) => {
  db.query("SELECT * FROM mahasiswa", (Error, result) => {
    console.log(result)
  })

  res.send('utama')
})

 app.get('/hello', (req, res) => {
  res.send('hello world ') 
 })

 app.post('/login', (req, res) => {
  res.send('login berhasil')
 })

 app.get('/ambil', (req, res) => {
  res.send('ambil berhasil')
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

