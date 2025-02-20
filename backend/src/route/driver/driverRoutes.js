import express from "express";
import uploadDriver from "../../middleware/multerDriver.js";
// import { addDriver, getAllDrivers, getDriverById } from "../controllers/driverController.js";
import { addDriver, getAllDrivers, getDriverById } from "../../controller/driver/driverController.js";
const router = express.Router();

router.post("/add", uploadDriver, addDriver);
router.get("/", getAllDrivers);
router.get("/:id", getDriverById);

export { router as driverRouter };
