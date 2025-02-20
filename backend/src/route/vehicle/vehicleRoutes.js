// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const vehicleController = require('../controllers/vehicleController');


// const router = express.Router();

// // Set up multer for image upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// // Add vehicle route
// router.post('/vehicles', upload.array('images', 5), vehicleController.addVehicle);

// // Get all vehicles route
// router.get('/vehicles', vehicleController.getVehicles);

// module.exports = router;

// 

// import express from "express";
// import { Vehicle } from "../models/index.js"; // Ensure correct import path


// const router = express.Router();

// router.post("/vehicle", async (req, res) => {
//   try {
//     const newVehicle = await Vehicle.create(req.body);
//     res.status(201).json(newVehicle);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to add vehicle", details: error.message });
//   }
// });

// import express from 'express';
// import { addVehicle } from '../../controllers/vehicle/vehicleController.js';

// const router = express.Router();

// // Route to add a vehicle
// router.post('/', addVehicle);




// export { router as vehicleRouter };

// routes/vehicle/vehicleRouter.js

// import express from "express";
// import upload from "../../middleware/multerConfig.js"; // Import the multer config
// import Vehicle from "../../models/vehicle/Vehicle.js"; // Import the Vehicle model

// const router = express.Router();

// // Route to add a new vehicle with images
// router.post("/vehicle", upload, async (req, res) => {
//   try {
//     // Create a new vehicle record using the form data from req.body
//     const newVehicle = await Vehicle.create({
//       name: req.body.name,
//       brand: req.body.brand,
//       model: req.body.model,
//       year: req.body.year,
//       price: req.body.price,
//       type: req.body.type,
//       seats: req.body.seats,
//       fuel: req.body.fuel,
//       transmission: req.body.transmission,
//       images: req.files.map((file) => `/uploads/${file.filename}`), // Store the uploaded image paths
//     });

//     res.status(201).json(newVehicle); // Send back the new vehicle as response
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to add vehicle", details: error.message });
//   }
// });

// export { router as vehicleRouter };

// routes/vehicle/vehicleRouter.js

import express from "express";
import upload from "../../middleware/multerConfig.js"; // Import multer config
import Vehicle from "../../models/vehicle/Vehicle.js"; // Import Vehicle model
import { getVehicles } from "../../controller/vehicle/vehicleController.js";

const router = express.Router();

// Route to add a new vehicle with images
router.post("/vehicles", upload, async (req, res) => {
  try {
    // Create a new vehicle record using the form data from req.body
    const newVehicle = await Vehicle.create({
      name: req.body.name,
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price,
      type: req.body.type,
      seats: req.body.seats,
      fuel: req.body.fuel,
      transmission: req.body.transmission,
      images: req.files.map((file) => `/uploads/${file.filename}`), // Store the uploaded image paths
    });

    res.status(201).json(newVehicle)[0]; // Send back the new vehicle as response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add vehicle", details: error.message });
  }
});



// Endpoint to get all vehicles
router.get('/vehicles', getVehicles);

export { router as vehicleRouter };




