// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const path = require("path");
// const multer = require("multer");
// const app = express();
// const DBindex = require("./express/DB/configDB");
// const dataRoutes = require("./express/routes/data");
// const port = process.env.PORT || 4040;

// app.use(cors());
// app.use(bodyParser.json());

// const fileStorage = multer.diskStorage({
//   //tujuan folder, cb itu callback
//   //The folder to which the file has been saved
//   destination: (req, file, cb) => {
//     cb(null, "img");
//   },
//   //Filename: The name of the file within the destination
//   filename: (req, file, cb) => {
//     //semisal ada file duplikat. filenya bakal berbeda karena waktu
//     cb(null, new Date().getTime() + "-" + file.originalname);
//   },
// });

// //filter ekstensi file yang support
// const CKfileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/gif" ||
//     file.mimetype === "image/webp" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// // //path images
// // //cth http://localhost:4040/images/(namafile)
// app.use("/images", express.static(path.join(__dirname, "img")));
// //dibawah validation error & dataroutes
// app.use(multer().single("none"));

// app.use("/v1", dataRoutes);

// // menangkap error dari validasi
// app.use((error, req, res, next) => {
//   const status = error.errorStatus || 500;
//   const message = error.message;
//   const data = error.data;
//   //data ngambil semua array
//   // console.log(data)
//   res.status(status).json({ message, data });
// });

// app.listen(port, () => {
//   console.log(`Server berjalan di port ${[port]}`);
// });

// // app.listen(port,() => console.log(`server berjalan di port ${port}`))
// //admin Jn0IbCuh7ky250Ga
// //ramirezABD cm5ov6PyDUiX0T4L
// // mongoose.connect('mongodb+srv://admin:Jn0IbCuh7ky250Ga@freshwaterfish.f3u6lnz.mongodb.net/?retryWrites=true&w=majority')
// //     .then((res) => {
// //         app.listen(port, () => console.log(`Localhost berada di port ${port}`))
// //     })
// //     .catch(err => console.error(err))

/*===============Kode Baru===============*/

// Import third party package
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const multer = require("multer");

// Import local module / Package buatan sendiri
const routes = require("./express/routes/data");

// deklarasi variabel yang dibutuhkan
const app = express();
const port = process.env.PORT || 4040;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

// Multer untuk menangani input data
app.use(multer().single(null));

app.use("/biodata", routes);

// menangkap error dari validasi
app.use((e, req, res, next) => {
  const code = e.errorStatus || 500;
  const message = e.message;
  const data = e.data;
  res.status(code).json({ message, data });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
