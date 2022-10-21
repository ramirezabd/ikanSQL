const db = require('./configDB')

//nama table adalah users
const sql = `CREATE TABLE ikannn
            (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(30),
                tgl_lhr VARCHAR(11),
                bio VARCHAR(255),
                PRIMARY KEY (id)
            )
            `

db.query(sql, (err, result)=> {
    if(err) throw err 
    console.log("Table Berhasil Dibuat")
})
