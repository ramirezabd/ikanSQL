const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    // kalo pake user dibawah ini error
    // user: "insert_random_name",
    password: "",
    //database kosongin dulu sebelung create DB
    database: "FID"
})

db.connect(err => {
    // if(err) throw err
    err ? console.error(err) : console.log("DB berhasil berjalan")
})

module.exports = db