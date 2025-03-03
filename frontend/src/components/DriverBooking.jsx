import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavHome from "./NavHome";

const DriverBooking = () => {
  const { state } = useLocation();
  const { driver, startDate, endDate, totalPrice, userId } = state; 
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      const bookingDetails = {
        driverId: driver.id, 
        userId, 
        startDate,
        endDate,
        totalPrice,
      };

      const response = await fetch("http://localhost:4000/api/driver-bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Driver booking successful:", data);
        navigate("/home"); // Redirect to home 
      } else {
        console.error("Driver booking failed:", response.statusText);
      }
    } catch (error) {
      console.error("Driver booking failed:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <NavHome />
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Driver Booking Confirmation</h2>

        {/* Driver Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Driver Details</h3>
          <p><strong>Name:</strong> {driver.name}</p>
          <p><strong>Phone:</strong> {driver.phone}</p>
          <p><strong>Experience:</strong> {driver.experience} years</p>
          <p><strong>Vehicle Type:</strong> {driver.vehicleType}</p>
          <p><strong>Price per Day:</strong> NRP1500</p>
        </div>

        {/* Booking Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h3>
          <p><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}</p>
          <p><strong>Total Price:</strong> NRP{totalPrice}</p>
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

export default DriverBooking;

