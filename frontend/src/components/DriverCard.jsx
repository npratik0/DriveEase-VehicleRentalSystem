// import React from "react";

// const DriverCard = ({ driver }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 w-72 text-center">
//       <img
//         src={"driver.image"}
//         alt={"driver.name"}
//         className="w-32 h-32 mx-auto rounded-full object-cover"
//       />
//       <h3 className="text-lg font-semibold mt-3">{"driver.name"}</h3>
//       <p className="text-gray-600">Experience: {"driver.experience"} years</p>
//       <p className="text-gray-600">Vehicle Type: {"driver.vehicleType"}</p>
//       <p className="text-yellow-500">⭐ {"driver.rating"}</p>
//       <button className="mt-3 bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700">
//         Hire Driver
//       </button>
//     </div>
//   );
// };

// export default DriverCard;

// import React from "react";

// const DriverCard = ({ driver, onViewDetails }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
//       <img
//         src={`http://localhost:4000/${driver.driverPhoto}`}
//         alt={driver.name}
//         className="w-full h-48 object-cover rounded-md"
//       />
//       <h3 className="text-lg font-semibold text-blue-600 mt-2">{driver.name}</h3>
//       <p className="text-gray-600">Experience: {driver.experience} years</p>
//       <p className="text-gray-600">Vehicle Type: {driver.vehicleType}</p>
//       <button
//         className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//         onClick={() => onViewDetails(driver.id)}
//       >
//         View Details
//       </button>
//     </div>
//   );
// };

// export default DriverCard;

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



