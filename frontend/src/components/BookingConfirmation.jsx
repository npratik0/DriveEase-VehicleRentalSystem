import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavHome from "./NavHome";

const BookingConfirmation = () => {
  const { state } = useLocation();
  const { car, startDate, endDate, totalPrice, userId } = state; // Include userId
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      const bookingDetails = {
        carId: car.id, // Ensure this matches the car ID in your database
        userId, // Include the userId
        startDate,
        endDate,
        totalPrice,
      };

      const response = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Booking successful:", data);
        navigate("/home"); // Redirect to home or another page
      } else {
        console.error("Booking failed:", response.statusText);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <NavHome />
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Booking Confirmation</h2>

        {/* Car Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Car Details</h3>
          <p><strong>Name:</strong> {car.name}</p>
          <p><strong>Brand:</strong> {car.brand}</p>
          <p><strong>Model:</strong> {car.model}</p>
          <p><strong>Price per Day:</strong> ${car.price}</p>
        </div>

        {/* Booking Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h3>
          <p><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}</p>
          <p><strong>Total Price:</strong> ${totalPrice}</p>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;