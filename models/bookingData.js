const mongoose = require("mongoose");
const { type } = require("os");



const vehicleBookSchema = new mongoose.Schema({

 
 
    city: {
        type: String,
        required: true
    },
    vehicleName: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    totalPassangers: {
        type: String,
        required: true
    },

})


module.exports = mongoose.model('vehicleBook ', vehicleBookSchema);