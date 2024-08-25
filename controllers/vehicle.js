const vehicle = require("../models/vehicle");





exports.createVehicle = async (req, res) => {
    const { city, name, withAC, withoutAC, maxAllowed } = req.body;

    console.log("REQUEST BODY ..........", req.body)

    if (!city, !name, !withAC, !withoutAC, !maxAllowed) {
        return res.status(400).json({
            success: false,
            massage: "please fill all  fields"
        })
    }

    const response = await vehicle.create({ city, name, withAC, withoutAC, maxAllowed })
        ;


    if (!response) {
        return res.status(500).json({
            success: true,
            massage: "vehicle data  not saved "
        })
    }

    res.status(200).json({
        success: true,
        massage: "vehicle data saved successfully ",
        response
    })
}



// get vehicle  



exports.getCity = async (req, res) => {


    const response = await vehicle.find();


    if (!response) {
        return res.status(500).json({
            success: true,
            massage: "vehicle can not get"
        })
    }

    res.status(200).json({
        success: true,
        massage: "vehicle get  successfully ",
        response
    })
}







