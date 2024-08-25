const express = require('express');
const router = express.Router();


const { createVehicle } = require("../controllers/vehicle");
const { bookVehicle } = require("../controllers/bookingVehicle");
const { getCity } = require("../controllers/vehicle");
const { getAllData } = require("../controllers/bookingVehicle")


router.post("/create", createVehicle);
router.post("/booking", bookVehicle);
router.get("/get-city", getCity);
router.get("/get-allDetails", getAllData);




module.exports = router;