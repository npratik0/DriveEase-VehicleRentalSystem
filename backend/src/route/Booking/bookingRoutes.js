import express from "express";
import { Booking } from "../../models/Booking/Booking";// Adjust the import path as needed

const router = express.Router();

// Create a new booking
router.post("/bookings", async (req, res) => {
  try {
    const { carId, userId, startDate, endDate, totalPrice } = req.body;

    const booking = await Booking.create({
      carId,
      userId,
      startDate,
      endDate,
      totalPrice,
    });

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

export default router;