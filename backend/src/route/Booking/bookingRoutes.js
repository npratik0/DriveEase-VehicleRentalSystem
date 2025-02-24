import express from "express";
import { Booking } from "../../models/Booking/Booking.js";// Adjust the import path as needed
import { User } from "../../models/user/User.js";

const router = express.Router();

// Fetch all bookings with user details
router.get("/booking", async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        {
          model: User,
          as: "User",
          attributes: ["id", "name", "email"], // Include user details
        },
      ],
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Failed to fetch bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

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

// router.get("/booking", async (req, res) => {
//   try {
//     const bookings = await Booking.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ["id", "name", "email"], // Include user details
//         },
//       ],
//     });

//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error("Failed to fetch bookings:", error);
//     res.status(500).json({ error: "Failed to fetch bookings" });
//   }
// });

export { router as bookingRouter };