const db = require("./configDB");
const sql = "CREATE DATABASE biodata";

db.query(sql, (err) => {
  if (err) throw err;
  console.log("DB Berhasil Dibuat");
});
