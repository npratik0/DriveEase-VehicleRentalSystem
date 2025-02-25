import express from "express";
import { DriverBooking } from "../../models/DriverBooking.js/DriverBooking.js";
import { User } from "../../models/user/User.js";
import Driver from "../../models/driver/driver.js";

const router = express.Router();

// Create a new driver booking
router.post("/driver-bookings", async (req, res) => {
  try {
    const { driverId, userId, startDate, endDate, totalPrice } = req.body;

    const booking = await DriverBooking.create({
      driverId,
      userId,
      startDate,
      endDate,
      totalPrice,
    });

    res.status(201).json({ message: "Driver booked successfully!", booking });
  } catch (error) {
    console.error("Driver booking failed:", error);
    res.status(500).json({ error: "Failed to book driver" });
  }
});

// Fetch all driver bookings with user and driver details
router.get("/driver-bookings", async (req, res) => {
  try {
    const driverBookings = await DriverBooking.findAll({
      include: [
        {
          model: User,
          as: "User",
          attributes: ["id", "name", "email"],
        },
        {
          model: Driver,
          as: "Driver",
          attributes: ["id", "name", "phone", "experience", "vehicleType"],
        },
      ],
    });

    res.status(200).json(driverBookings);
  } catch (error) {
    console.error("Failed to fetch driver bookings:", error);
    res.status(500).json({ error: "Failed to fetch driver bookings" });
  }
});

export { router as driverBookingRouter };
