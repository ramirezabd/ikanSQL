// const WebPost = require('../model/model')
const {validationResult} = require('express-validator')
const path = require('path')
const fs = require('fs')
const db = require('../DB/configDB')

// nampung data untuk diinput
const post = (req, res) =>{
    // const VariabelERR = validationResult(req)


    // if(!VariabelERR.isEmpty()){
    //     console.log("ye put invalid input ")
    //     const err = new Error("Gagal Maning")
    //     err.errorStatus = 400
    //     err.data = VariabelERR.array()
    //     throw err
    // }
    let result = {
        //path gambar harus ditangkep, beda kaya yang lain
        Order: req.body.Order,
        Species: req.body.Species,
        Family: req.body.Family
        // fileIMG: req.file.path
    }
    console.log(result)
    const command = `INSERT INTO ikannn ('Order', 'Species','Family') VALUES ('${result.Order}','${result.Species}','${result.Family}')`
    // INSERT INTO ikannn (Order, Species, Family) VALUES ('${result.Order}','${result.Species}','${result.Family}')`

    db.query(command, (err, res4) => {
        res.status(200).json({
            message: "Data berhasil di post",
            data: res4
        })
        throw err
    })


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

}

//get data keseluruhan
const data = (req, res) => {
    const command = `SELECT * FROM ikannn`
    db.query(command, (err, res3) => {
        res.status(200).json({
            message: "data berhasil di get",
            data: res3
        }),
        console.log("data berhasil di get")
    })

    // WebPost.find()
    //     .then(res3 => {
            // res.status(200).json({
            //     message: "data berhasil di get",
            //     data: res3
            // }),
            // console.log("data berhasil di get")
    // })
}

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
module.exports = {data, post}