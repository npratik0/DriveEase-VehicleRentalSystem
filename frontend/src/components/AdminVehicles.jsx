// import { useState } from "react";
// import AdminSidebar from "./AdminSidebar";

// const AdminVehicles = () => {
//   const [vehicle, setVehicle] = useState({ name: "", model: "", price: "", image: null });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVehicle((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setVehicle((prev) => ({ ...prev, image: URL.createObjectURL(e.target.files[0]) }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Vehicle Added Successfully!");
//   };

//   return (
//     <div className="flex">
//       <AdminSidebar active="vehicles" />
//       <div className="flex-1 p-6">
//         <h2 className="text-3xl font-semibold mb-4">Add Vehicle</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="name" placeholder="Vehicle Name" className="border p-2 w-full" onChange={handleChange} required />
//           <input type="text" name="model" placeholder="Model" className="border p-2 w-full" onChange={handleChange} required />
//           <input type="number" name="price" placeholder="Price" className="border p-2 w-full" onChange={handleChange} required />
//           <input type="file" onChange={handleImageChange} className="border p-2 w-full" />
//           {vehicle.image && <img src={vehicle.image} alt="Preview" className="h-40 mt-2" />}
//           <button className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700">Add Vehicle</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminVehicles;

// import { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import AdminSidebar from "./AdminSidebar";

// const AdminVehicles = () => {
//   const [vehicleData, setVehicleData] = useState({
//     name: "",
//     brand: "",
//     model: "",
//     year: "",
//     price: "",
//     type: "",
//     seats: "",
//     fuel: "",
//     transmission: "",
//     images: [],
//   });

//   const handleChange = (e) => {
//     setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setVehicleData({
//       ...vehicleData,
//       images: [...vehicleData.images, ...files],
//     });
//   };

//   const removeImage = (index) => {
//     setVehicleData({
//       ...vehicleData,
//       images: vehicleData.images.filter((_, i) => i !== index),
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Vehicle Data:", vehicleData);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <AdminSidebar />
      
//       {/* Main Content */}
//       <div className="flex-1 p-6 bg-gray-100 min-h-screen">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Add Vehicle</h1>
//           <FaUserCircle className="text-3xl cursor-pointer text-gray-600" />
//         </div>

//         {/* Vehicle Form */}
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
//           <div className="grid grid-cols-2 gap-6">
//             {/* Left Column - Text Inputs */}
//             <div>
//               <label className="block font-semibold text-gray-700">Vehicle Name</label>
//               <input type="text" name="name" placeholder="Enter vehicle name" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Brand</label>
//               <input type="text" name="brand" placeholder="Enter brand" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Model</label>
//               <input type="text" name="model" placeholder="Enter model" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Year</label>
//               <input type="number" name="year" placeholder="Enter year" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Price per Day</label>
//               <input type="number" name="price" placeholder="Enter rental price" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />
//             </div>

//             {/* Right Column - Dropdowns & Image Upload */}
//             <div>
//               <label className="block font-semibold text-gray-700">Vehicle Type</label>
//               <select name="type" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
//                 <option value="">Select Type</option>
//                 <option value="Sedan">Sedan</option>
//                 <option value="SUV">SUV</option>
//                 <option value="Hatchback">Hatchback</option>
//                 <option value="Truck">Truck</option>
//                 <option value="Van">Van</option>
//               </select>

//               <label className="block font-semibold text-gray-700">Seats</label>
//               <input type="number" name="seats" placeholder="Enter number of seats" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Fuel Type</label>
//               <select name="fuel" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
//                 <option value="">Select Fuel Type</option>
//                 <option value="Petrol">Petrol</option>
//                 <option value="Diesel">Diesel</option>
//                 <option value="Electric">Electric</option>
//                 <option value="Hybrid">Hybrid</option>
//               </select>

//               <label className="block font-semibold text-gray-700">Transmission</label>
//               <select name="transmission" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
//                 <option value="">Select Transmission</option>
//                 <option value="Manual">Manual</option>
//                 <option value="Automatic">Automatic</option>
//               </select>

//               {/* Image Upload Section */}
//               <div className="mt-4">
//                 <label className="block font-semibold text-gray-700">Upload Vehicle Images</label>
//                 <input type="file" multiple onChange={handleImageUpload} className="mt-2" />

//                 {/* Preview Selected Images */}
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {vehicleData.images.map((image, index) => (
//                     <div key={index} className="relative">
//                       <img src={URL.createObjectURL(image)} alt="Vehicle" className="w-20 h-20 object-cover rounded shadow" />
//                       <button type="button" className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded" onClick={() => removeImage(index)}>X</button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded w-full hover:bg-blue-700">Add Vehicle</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminVehicles;




// import { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import AdminSidebar from "./AdminSidebar";
// import axios from "axios";

// const AdminVehicles = () => {
//   const [vehicleData, setVehicleData] = useState({
//     name: "",
//     brand: "",
//     model: "",
//     year: "",
//     price: "",
//     type: "",
//     seats: "",
//     fuel: "",
//     transmission: "",
//     images: [],
//   });

//   const handleChange = (e) => {
//     setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const imageUrls = files.map((file) => URL.createObjectURL(file)); 
//     setVehicleData({
//       ...vehicleData,
//       images: [...vehicleData.images, ...imageUrls],
//     });
//   };

//   const removeImage = (index) => {
//     setVehicleData({
//       ...vehicleData,
//       images: vehicleData.images.filter((_, i) => i !== index),
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:4000/api/vehicles", vehicleData);
//       console.log("Vehicle added:", response.data);
//       alert("Vehicle added successfully!");
//     } catch (error) {
//       console.error("Error adding vehicle:", error);
//       alert("Failed to add vehicle.");
//     }
//   };

//   return (
//     <div className="flex">
//       <AdminSidebar />
//       <div className="flex-1 p-6 bg-gray-100 min-h-screen">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Add Vehicle</h1>
//           <FaUserCircle className="text-3xl cursor-pointer text-gray-600" />
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block font-semibold text-gray-700">Vehicle Name</label>
//               <input type="text" name="name" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Brand</label>
//               <input type="text" name="brand" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Model</label>
//               <input type="text" name="model" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Year</label>
//               <input type="number" name="year" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Price per Day</label>
//               <input type="number" name="price" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />
//             </div>

//             <div>
//               <label className="block font-semibold text-gray-700">Vehicle Type</label>
//               <select name="type" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
//                 <option value="">Select Type</option>
//                 <option value="Sedan">Sedan</option>
//                 <option value="SUV">SUV</option>
//                 <option value="Hatchback">Hatchback</option>
//                 <option value="Truck">Truck</option>
//                 <option value="Van">Van</option>
//               </select>

//               <label className="block font-semibold text-gray-700">Seats</label>
//               <input type="number" name="seats" onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//               <label className="block font-semibold text-gray-700">Fuel Type</label>
//               <select name="fuel" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
//                 <option value="">Select Fuel Type</option>
//                 <option value="Petrol">Petrol</option>
//                 <option value="Diesel">Diesel</option>
//                 <option value="Electric">Electric</option>
//                 <option value="Hybrid">Hybrid</option>
//               </select>

//               <label className="block font-semibold text-gray-700">Transmission</label>
//               <select name="transmission" onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
//                 <option value="">Select Transmission</option>
//                 <option value="Manual">Manual</option>
//                 <option value="Automatic">Automatic</option>
//               </select>

//               <label className="block font-semibold text-gray-700">Upload Vehicle Images</label>
//               <input type="file" multiple onChange={handleImageUpload} className="mt-2" />

//               <div className="flex flex-wrap gap-2 mt-2">
//                 {vehicleData.images.map((image, index) => (
//                   <div key={index} className="relative">
//                     <img src={image} alt="Vehicle" className="w-20 h-20 object-cover rounded shadow" />
//                     <button type="button" className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded" onClick={() => removeImage(index)}>X</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <button type="submit" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded w-full hover:bg-blue-700">
//             Add Vehicle
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminVehicles;


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
    images: [], // This will store files, not URLs anymore
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
          "Content-Type": "multipart/form-data", // Required to upload files
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
