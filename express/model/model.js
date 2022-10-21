const mongoose = require('mongoose')
const Scheme = mongoose.Schema


//skema untuk membuat aturan di database
const WebPost = new Scheme({
    Order : {
        type: String,
        required: true
    },
    Family : {
        type: String,
        required: true
    },
    Species: {
        type: String,
        required: true
    },
    GenName: {
        type: String,
        required: true
    },
    Environment : {
        type: String,
        required: true
    },
    Distribution : {
        type: String,
        required: true
    },
    fileIMG : {
        type: String,
        required: true
    },
}, {
    //penanggalan otomatis
    timetamps: true
})

module.exports = mongoose.model("FreshWaterIndex", WebPost)