import React, { useState } from "react";

const VehicleManagement = () => {
  const [vehicle, setVehicle] = useState({
    name: "",
    brand: "",
    type: "",
    price: "",
    fuelType: "",
    transmission: "",
  });

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Vehicle Added:", vehicle);
  };

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Vehicle Name" className="w-full p-2 border" onChange={handleChange} />
        <input type="text" name="brand" placeholder="Brand" className="w-full p-2 border" onChange={handleChange} />
        <input type="text" name="type" placeholder="Type (SUV, Sedan, etc.)" className="w-full p-2 border" onChange={handleChange} />
        <input type="number" name="price" placeholder="Price per Day" className="w-full p-2 border" onChange={handleChange} />
        <select name="fuelType" className="w-full p-2 border" onChange={handleChange}>
          <option>Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Electric</option>
          <option>Hybrid</option>
        </select>
        <select name="transmission" className="w-full p-2 border" onChange={handleChange}>
          <option>Transmission</option>
          <option>Automatic</option>
          <option>Manual</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Vehicle</button>
      </form>
    </div>
  );
};

export default VehicleManagement;
