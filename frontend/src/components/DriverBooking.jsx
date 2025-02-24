import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DriverBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("You need to be logged in to book a driver.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/driver-bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ driverId: id, startDate, endDate }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/home");
      } else {
        setMessage(data.message || "Failed to book driver.");
      }
    } catch (error) {
      console.error("Error booking driver:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Book Driver</h2>
      {message && <p className="text-red-500">{message}</p>}
      <div className="flex flex-col gap-4">
        <input
          type="date"
          className="border p-2 rounded"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default DriverBooking;
