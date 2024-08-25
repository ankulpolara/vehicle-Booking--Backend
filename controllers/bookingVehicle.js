const vehicleBook = require("../models/bookingData");
// var randomId = require('random-id');
const vehicle = require("../models/vehicle");
const { availableParallelism } = require("os");

// var len = 30;
// var pattern = 'aA0'

// var randId = randomId(len, pattern)




// BOOK VEHICLE  
const Vehicle = require('../models/vehicle'); // Ensure you have the correct import for the vehicle model

exports.bookVehicle = async (req, res) => {
    const { city, vehicleName, distance, vehicleType, totalPassangers } = req.body;

    // console.log("REQUEST BODY ..........", req.body);

    // Validate required fields
    if (!city || !vehicleName || !distance || !vehicleType || !totalPassangers) {
        return res.status(400).json({
            success: false,
            message: "Please fill all fields"
        });
    }

    // Find the vehicle details based on city and vehicle name
    const vehicleDetails = await Vehicle.findOne({ city, name: vehicleName });

    if (!vehicleDetails) {
        return res.status(404).json({
            success: false,
            message: "No vehicles available for the selected city and vehicle name"
        });
    }

    // Check if the total passengers exceed the max allowed passengers
    if (parseInt(totalPassangers) > parseInt(vehicleDetails.maxAllowed)) {
        return res.status(200).json({
            success: false,
            message: `The maximum allowed passengers for this vehicle is ${vehicleDetails.maxAllowed}.`
        });
    }

    // Proceed with booking the vehicle if all conditions are met
    const response = await vehicleBook.create({ city, vehicleName, distance, vehicleType, totalPassangers });

    if (!response) {
        return res.status(500).json({
            success: false,
            message: "Error while booking the vehicle"
        });
    }

    res.status(200).json({
        success: true,
        message: "Vehicle booked successfully",
        data: [response, vehicleDetails]
    });
};















// AVAILABLE VEHICLE BASIS OF CITY NAME 


exports.getCity = async (req, res) => {
    const { cityName } = req.body();

    const response = await vehicle.find({});


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





// get all details by  id   

exports.getAllData = async (req, res) => {
    const { id } = req.body;

    const response = await vehicleBook.findOne({ id: id });


    if (!response) {
        return res.status(500).json({
            success: true,
            massage: "booked detail can not fetch"
        })
    }

    res.status(200).json({
        success: true,
        massage: "vehicle booked data  successfully fetched ",
        response
    })
}



