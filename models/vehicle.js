const mongoose = require("mongoose");



 const vehicleSchema = new mongoose.Schema({
    city : {
        type : String ,
        required :true
    },
    name : {
        type : String ,
        required :true
    },
    withAC : {
         type : String ,
        required :true
    },
    withoutAC : {
         type : String ,
        required :true
    },
    maxAllowed : {
         type : String ,
        required :true
    },

 })


    module.exports  = mongoose.model('vehicle ', vehicleSchema);

