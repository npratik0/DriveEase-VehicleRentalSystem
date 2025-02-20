import React, { useState } from "react";

const DriverManagement = () => {
  const [driver, setDriver] = useState({
    name: "",
    phone: "",
    license: "",
    experience: "",
  });

  const handleChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Driver Added:", driver);
  };

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Driver</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Driver Name" className="w-full p-2 border" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" className="w-full p-2 border" onChange={handleChange} />
        <input type="text" name="license" placeholder="License Number" className="w-full p-2 border" onChange={handleChange} />
        <input type="text" name="experience" placeholder="Experience (Years)" className="w-full p-2 border" onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Driver</button>
      </form>
    </div>
  );
};

export default DriverManagement;
