const db = require("./configDB");

//nama table adalah user
const sql = `CREATE TABLE user
            (
                id INT NOT NULL AUTO_INCREMENT,
                nama VARCHAR(30),
                umur VARCHAR(11),
                hobi VARCHAR(255),
                PRIMARY KEY (id)
            )
            `;

db.query(sql, (e) => {
  e ? console.error(e) : console.log("Table Berhasil Dibuat");
});
