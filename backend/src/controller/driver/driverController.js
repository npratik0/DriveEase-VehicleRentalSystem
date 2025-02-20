import Driver from "../../models/driver/driver.js";

// Add a new driver
export const addDriver = async (req, res) => {
  try {
    const { name, phone, licenseNumber, experience, vehicleType } = req.body;
    const driverPhoto = req.files["driverPhoto"] ? req.files["driverPhoto"][0].path : null;
    const licenseFront = req.files["licenseFront"] ? req.files["licenseFront"][0].path : null;
    const licenseBack = req.files["licenseBack"] ? req.files["licenseBack"][0].path : null;

    if (!driverPhoto || !licenseFront || !licenseBack) {
      return res.status(400).json({ message: "All images are required!" });
    }

    const newDriver = await Driver.create({
      name,
      phone,
      licenseNumber,
      experience,
      vehicleType,
      driverPhoto,
      licenseFront,
      licenseBack,
    });

    res.status(201).json({ message: "Driver added successfully!", driver: newDriver });
  } catch (error) {
    res.status(500).json({ message: "Error adding driver", error: error.message });
  }
};

// Get all drivers
export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching drivers", error: error.message });
  }
};

// Get a driver by ID
export const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findByPk(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: "Error fetching driver", error: error.message });
  }
};
