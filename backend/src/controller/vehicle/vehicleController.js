// const Vehicle = require('../models/vehicle');
// const path = require('path');

// // Add a vehicle
// exports.addVehicle = async (req, res) => {
//   try {
//     const { name, brand, model, year, price, type, seats, fuel, transmission } = req.body;
//     const images = req.files.map(file => file.path); // Extract image paths

//     const newVehicle = await Vehicle.create({
//       name,
//       brand,
//       model,
//       year,
//       price,
//       type,
//       seats,
//       fuel,
//       transmission,
//       images,
//     });

//     res.status(201).json(newVehicle);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to add vehicle' });
//   }
// };

// // Get all vehicles
// exports.getVehicles = async (req, res) => {
//   try {
//     const vehicles = await Vehicle.findAll();
//     res.status(200).json(vehicles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to fetch vehicles' });
//   }
// };


// import Vehicle from '../../models/vehicle/vehicleModel.js';
import Vehicle from "../../models/vehicle/Vehicle.js";

// Add vehicle function
export const addVehicle = async (req, res) => {
  try {
    const { name, brand, model, year, price, type, seats, fuel, transmission, images } = req.body;

    if (!name || !brand || !model || !year || !price || !type || !seats || !fuel || !transmission || !images) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new vehicle in the database
    const newVehicle = await Vehicle.create({
      name,
      brand,
      model,
      year,
      price,
      type,
      seats,
      fuel,
      transmission,
      images,  // Store images as JSON array
    });

    return res.status(201).json({
      message: 'Vehicle added successfully!',
      vehicle: newVehicle,
    });
  } catch (error) {
    console.error('Error adding vehicle:', error);
    return res.status(500).json({ message: 'Failed to add vehicle' });
  }
};

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();  // Assuming Sequelize is used to fetch all vehicles
    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Error fetching vehicles' });
  }
};
