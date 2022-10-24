// const { Router } = require("express")
// const { Router } = require("express");
// const routes = Router();
// const { body } = require("express-validator");
// const { data, post } = require("../controller/contr");

// const validasi = [
//   //syarat validasi
//   body("Order")
//     .isLength({ min: 3 })
//     .withMessage(
//       "karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100"
//     ),
//   body("Species")
//     .isLength({ min: 3 })
//     .withMessage(
//       "karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100"
//     ),
//   body("Family")
//     .isLength({ min: 3 })
//     .withMessage(
//       "karakter judul tidak boleh kurang dari 3 karakter atau lebih dari 100"
//     ),
// ];

//('/(nama endpoint)', fungsi)
// http://localhost:4000/images/
// http://localhost:4000/v1/post/
// http://localhost:4000/v1/get/
// routes.get("/get", data);

//tambah data kedalam api
// routes.post("/post", validasi, post);

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

// module.exports = routes;

/*==============Kode Baru================ */

const { Router } = require("express");
const { body } = require("express-validator");
const { get, post, search, edit, del } = require("../controller/contr");

const routes = Router();
// Abstraksi untuk syarat validasi pada router memerlukan validasi
const validation = [
  //syarat validasi
  body("nama")
    .isLength({ min: 3, max: 30 })
    .withMessage("Nama tidak boleh kosong"),
  body("umur")
    .isLength({ min: 1, max: 3 })
    .withMessage("Umur tidak boleh kosong"),
  body("hobi")
    .isLength({ min: 3, max: 255 })
    .withMessage("Hobi tidak boleh kosong"),
];

routes.get("/get", get);
routes.post("/post", validation, post);
routes.get("/get/:id", search);
routes.put("/edit/:id", validation, edit);
routes.delete("/delete/:id", del);

module.exports = routes;
