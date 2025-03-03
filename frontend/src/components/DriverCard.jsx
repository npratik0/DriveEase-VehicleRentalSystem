

import React from "react";
import { useNavigate } from "react-router-dom";


const DriverCard = ({ driver }) => {
  const navigate = useNavigate();

  const handleBookDriver = () => {
    navigate(`/drivercarousel/${driver.id}`, { state: { driver } });
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-5 w-full max-w-[300px] mx-auto transform transition hover:scale-105 duration-300">
      {/* Circular Driver Image */}
      <div className="flex justify-center">
        <img
          src={`http://localhost:4000/${driver.driverPhoto}`}
          alt={driver.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
        />
      </div>

      {/* Driver Info */}
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-blue-600">{driver.name}</h2>
        <p className="text-gray-600 text-sm">📞 {driver.phone}</p>
        <p className="text-gray-600 text-sm">🚗 {driver.vehicleType}</p>
        <p className="text-gray-600 text-sm">🎖️ {driver.experience} years experience</p>

        {/* Booking Button */}
        <button 
        onClick={handleBookDriver}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Book Driver
        </button>
      </div>
    </div>
  );
};

export default DriverCard;



