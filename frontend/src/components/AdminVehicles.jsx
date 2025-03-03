
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

const AdminVehicles = () => {
  const [vehicleData, setVehicleData] = useState({
    name: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    type: "",
    seats: "",
    fuel: "",
    transmission: "",
    images: [], 
  });

  const handleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setVehicleData({
      ...vehicleData,
      images: [...vehicleData.images, ...files], // Store actual files
    });
  };

  const removeImage = (index) => {
    setVehicleData({
      ...vehicleData,
      images: vehicleData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    // Append each field to formData
    for (const key in vehicleData) {
      if (key === "images") {
        // Append images as files
        vehicleData.images.forEach((image) => {
          formData.append("images", image); // This will send the image files to the server
        });
      } else {
        formData.append(key, vehicleData[key]);
      }
    }

    try {
      const response = await axios.post("http://localhost:4000/api/vehicles", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      console.log("Vehicle added:", response.data);
      alert("Vehicle added successfully!");
    } catch (error) {
      console.error("Error adding vehicle:", error);
      alert("Failed to add vehicle.");
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Add Vehicle</h1>
          <FaUserCircle className="text-3xl cursor-pointer text-gray-600" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-gray-700">Vehicle Name</label>
              <input type="text" name="name" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

              <label className="block font-semibold text-gray-700">Brand</label>
              <input type="text" name="brand" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

              <label className="block font-semibold text-gray-700">Model</label>
              <input type="text" name="model" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

              <label className="block font-semibold text-gray-700">Year</label>
              <input type="number" name="year" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

              <label className="block font-semibold text-gray-700">Price per Day</label>
              <input type="number" name="price" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Vehicle Type</label>
              <select name="type" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
                <option value="">Select Type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Truck">Truck</option>
                <option value="Van">Van</option>
              </select>

              <label className="block font-semibold text-gray-700">Seats</label>
              <input type="number" name="seats" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

              <label className="block font-semibold text-gray-700">Fuel Type</label>
              <select name="fuel" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
                <option value="">Select Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>

              <label className="block font-semibold text-gray-700">Transmission</label>
              <select name="transmission" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
                <option value="">Select Transmission</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>

              <label className="block font-semibold text-gray-700">Upload Vehicle Images</label>
              <input type="file" multiple onChange={handleImageUpload} className="mt-2" />

              <div className="flex flex-wrap gap-2 mt-2">
                {vehicleData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img src={URL.createObjectURL(image)} alt="Vehicle" className="w-20 h-20 object-cover rounded shadow" />
                    <button type="button" className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded" onClick={() => removeImage(index)}>X</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button type="submit" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded w-full hover:bg-blue-700">
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminVehicles;
