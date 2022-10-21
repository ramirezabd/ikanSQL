// const { Router } = require("express")
const { Router } = require("express")
const express = require("express")
const routes = express.Router()
const { body } = require('express-validator')
const {data, post} = require ("../controller/contr")


//('/(nama endpoint)', fungsi)
// http://localhost:4000/images/
// http://localhost:4000/v1/post/
// http://localhost:4000/v1/get/
routes.get('/get', data)

//tambah data kedalam api
routes.post('/post', [
    //syarat validasi
    body("Order").isLength({min: 3}).withMessage("karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100"),
    body("Species").isLength({min: 3}).withMessage("karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100"),
    body("Family").isLength({min: 3}).withMessage("karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100")
], post)

//update data
// routes.put('/edit/:getID', [
//     //syarat validasi
//     body("Order").isLength({min: 3, max: 255}).withMessage("karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100"),
//     body("Family").isLength({min: 3, max: 255}).withMessage("karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100"),
//     body("Species").isLength({min: 3, max: 255}).withMessage("karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100"),
// ], edit)

//VIEW cari by ID
//cth
//http://localhost:4000/v1/get/nomor_ID
// routes.get('/view/:getID', View)

// //DELETE DATA
// routes.delete('/delt/:getID', Delt)

module.exports = routes