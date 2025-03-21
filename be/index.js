const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("./koneksi")
const respon = require("./respon")


app.use(bodyParser.json())

app.get("/", (req, res) => {
  respon(200, "API redy to go", "SUCCES", res)
})

app.get("/mhs", (req, res) => {
  const sql = " SELECT * FROM mhs; "
  db.query(sql, (err, fields) => {
    if (err) throw err
    respon(200,fields, "mahasiswa get list", res)
  })
  
})

app.get("/mhs/:nim", (req, res) => {
  const nim = req.params.nim 
  const sql = `SELECT * FROM mhs WHERE nim = ${nim}`
  db.query(sql,(err, fields) => {
    if (err) throw err
    respon(200,fields, `spesifik mahasiswa by id ${nim}`, res)
  })
   
})

app.post("/mhs", (req, res) => {
  const {nim, nama,kelas, alamat } = req.body
  const sql = `INSERT INTO mhs (nama, nim, kelas, alamat) VALUES ('${nama}', '${nim}', '${kelas}', '${alamat}')`;
  db.query(sql,(err,fields) => {
    if (err) respon(500, "invallid"," nim sudah ada", res )
    if (fields?.affectedRows) {
      const data = {
        isSuccess: (fields.affectedRows),
        id: (fields.insertId)
      } 
      respon(200,data, `data masuk`, res)
    }else {
      console.log ('data gagal masuk')
    }
  })
})


app.put("/mhs", (req, res) => {
  const {nim, nama,kelas, alamat } = req.body
  const sql = `UPDATE mhs SET nama = '${nama}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = '${nim}'`
  db.query(sql,(err,fields) => {
    if (err) respon(500, "invallid nim "," error", res )
    if (fields?.affectedRows) {
      const data = {
        isSuccess: (fields.affectedRows),
        message: (fields.message)
      } 
      respon(200,data, `berhasil diupdate`, res)
    }else {
      respon(404, "user not found"," nim tidak ditemukan", res )
    }
  })
})

app.delete("/mhs", (req, res) => {
  const {nim} = req.body
  const sql = `DELETE FROM mhs WHERE nim = ${nim}`
  db.query(sql,(err,fields) => {
    if (err) respon(500, "invallid nim "," error", res )
    if (fields?.affectedRows) {
      const data = {
        isSuccess : (fields.affectedRows),
        message : (fields.message) 
      }
      respon(200,data, `berhasil dihapus`, res)
    } else {
      respon(404, "user not found"," nim tidak ditemukan", res )
    }
  }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

