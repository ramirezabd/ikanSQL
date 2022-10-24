// const WebPost = require('../model/model')
// const {validationResult} = require('express-validator')
// const path = require('path')
// const fs = require('fs')
// const db = require('../DB/configDB')

// nampung data untuk diinput
// const post = (req, res) =>{
// const VariabelERR = validationResult(req)

// if(!VariabelERR.isEmpty()){
//     console.log("ye put invalid input ")
//     const err = new Error("Gagal Maning")
//     err.errorStatus = 400
//     err.data = VariabelERR.array()
//     throw err
// }
// let result = {
//path gambar harus ditangkep, beda kaya yang lain
// Order: req.body.Order,
// Species: req.body.Species,
// Family: req.body.Family
// fileIMG: req.file.path
// }
// console.log(result)
// const command = `INSERT INTO ikannn ('Order', 'Species','Family') VALUES ('${result.Order}','${result.Species}','${result.Family}')`
// INSERT INTO ikannn (Order, Species, Family) VALUES ('${result.Order}','${result.Species}','${result.Family}')`

// db.query(command, (err, res4) => {
//     res.status(200).json({
//         message: "Data berhasil di post",
//         data: res4
//     })
//     throw err
// })

//save dari mangoodb
// postArtikel.save()
//     .then(resp2 => {
//         res.status(200).json({
//             message: "data berhasil terunggah",
//             data: resp2
//         }),
//         console.log(`data berhasil terunggah ver terminal`)
//     })
//     .catch(err => console.error(err))

// }

//get data keseluruhan
// const data = (req, res) => {
//     const command = `SELECT * FROM ikannn`
//     db.query(command, (err, res3) => {
//         res.status(200).json({
//             message: "data berhasil di get",
//             data: res3
//         }),
//         console.log("data berhasil di get")
//     })

// WebPost.find()
//     .then(res3 => {
// res.status(200).json({
//     message: "data berhasil di get",
//     data: res3
// }),
// console.log("data berhasil di get")
// })
// }

//untuk view data per id
// const View =  (req, res) => {
//     const blogID = req.params.getID
//     command
//     WebPost.findById(blogID)
//         .then((res4) => {
//             res.status(200).json({
//                 message: "id berhasil dipanggil",
//                 data: res4
//             })
//         })
// }

//untuk update data
// const edit = (req, res, next) => {
//     const VariabelERR = validationResult(req)

//     if(!VariabelERR.isEmpty()){
//         console.log("ye put invalid input ")
//         const err = new Error("Gagal Maning")
//         err.errorStatus = 400
//         err.data = VariabelERR.array()
//         throw err
//     }

//     // cek jika file gambar error apa tidak
//     if(!req.file){
//         const err = new Error("gambar harus di upload")
//         err.errorStatus = 422
//         throw err
//     }

//     let result = {
//         //path gambar harus ditangkep, beda kaya yang lain
//         Order: req.body.Order,
//         Family: req.body.Family,
//         Species: req.body.Species
//         // fileIMG: req.file.path
//     }

//     const Webid = req.params.getID

//     WebPost.findById(Webid)
//         .then(resp5 => {
//             if(!resp5){
//                 const err = new Error("Data tidak ditemukan")
//                 err.errorStatus = 403
//                 throw err
//             }

//             resp5.Order = result.Order,
//             resp5.Family = result.Family,
//             resp5.Species = result.Species,
//             resp5.GenName = result.GenName,
//             resp5.Environment = result.Environment,
//             resp5.Distribution = result.Distribution,
//             resp5.fileIMG = result.fileIMG

//             return resp5.save()
//         })

//         .then(resp6 =>{
//             res.status(201).json({
//                 message: "data berhasil diperbarui",
//                 data: resp6
//             })
//     })
//     .catch(err => next(err))
// }

// const Delt = (req, res, next) => {
//     const blogID = req.params.getID
//     WebPost.findById(blogID)
//     .then(res11 => {
//         if(!res11){
//             const err = new Error("Tidak Ditemukan 2")
//             err.errorStatus = 422
//             throw err
//         }
//     hapusGambar(res.gambar)
//     return WebPost.findByIdAndRemove(blogID)
//     })
//     .then (res7 => {
//         res.status(200).json({
//             message:"data berhasil dihapus",
//             data: res7
//         })
//     })
//     .catch(err => next(err))
// }

// const hapusGambar = (filePath) => {
//     filePath = path.join(__dirname + "../.." + filePath)
//     fs.unlink(filePath, error => console.error(error))
// }

// module.exports = {post, data, View, edit, Delt}
// module.exports = {data, post}

/*================KODE BARU================== */

// import module yang dibutuhkan

const User = require("../model/model");
const { validationResult } = require("express-validator");

const get = (req, res) => {
  // Query sql untuk melihat semua data yang ada pada table
  const sql = `SELECT * FROM user`;

  // Jalankan fungsi user (sql dan res adalah parameter yang dijalankan di file model)
  User(sql, res);
};

// Fungsi untuk input data baru
const post = (req, res) => {
  // Deklarasi Variabel yang dibutuhkan
  const error = validationResult(req);
  let results = {
    nama: req.body.nama,
    umur: req.body.umur,
    hobi: req.body.hobi,
  };

  // Query sql untuk menambah data
  const sql = `INSERT INTO user (nama, umur, hobi)
            VALUES ('${results.nama}', '${results.umur}', '${results.hobi}')`;

  //   Pengecekan untuk error handling
  if (!error.isEmpty()) {
    const e = new Error("Invalid value");
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  User(sql, res);
};

// Fungsi untuk mencari data berdasarkan id
const search = (req, res) => {
  const id = req.params.id;

  // Query sql untuk melihat data berdasarkan id yang dipilih
  const sql = `SELECT user where id='${id}'`;

  User(sql, res);
};

// Fungsi untuk edit data berdasarkan id yang dipilih
const edit = (req, res) => {
  // Inisialisasi variable
  const error = validationResult(req);
  let results = {
    nama: req.body.nama,
    umur: req.body.umur,
    hobi: req.body.hobi,
  };
  const id = req.params.id;

  //   Query sql untuk update data dari id yang dipilh
  const sql = `UPDATE users SET nama='${results.nama}' umur='${results.umur}' hobi='${results.hobi}' where id='${id}'`;

  //   Pengecekan untuk error handling
  if (!error.isEmpty()) {
    const e = new Error("Invalid value");
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  //   Jalankan fungsi User
  User(sql, res);
};

// Fungsi untuk menghapus data berdasarkan ID
const del = (req, res) => {
  const id = req.params.id;

  //   Query sql untuk menghapus data dari id yang dipilh
  const sql = `DELETE FROM users WHERE id='${id}'`;
  User(sql, res);
};

// Export module / fungsi yang sudah dibuat
module.exports = { get, post, search, edit, del };
