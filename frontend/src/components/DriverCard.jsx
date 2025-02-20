import React from "react";

const DriverCard = ({ driver }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-72 text-center">
      <img
        src={"driver.image"}
        alt={"driver.name"}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold mt-3">{"driver.name"}</h3>
      <p className="text-gray-600">Experience: {"driver.experience"} years</p>
      <p className="text-gray-600">Vehicle Type: {"driver.vehicleType"}</p>
      <p className="text-yellow-500">⭐ {"driver.rating"}</p>
      <button className="mt-3 bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700">
        Hire Driver
      </button>
    </div>
  );
};

export default DriverCard;
