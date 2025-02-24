import { useEffect, useState } from "react";
import { FaUserCircle, FaEdit, FaTrash } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

const AdminUpdateDrivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [driverData, setDriverData] = useState({
    id: null,
    name: "",
    phone: "",
    licenseNumber: "",
    experience: "",
    vehicleType: "",
    driverPhoto: null,
    licenseFront: null,
    licenseBack: null,
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/drivers");
      setDrivers(response.data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  const handleChange = (e) => {
    setDriverData({ ...driverData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    setDriverData({ ...driverData, [field]: file });
  };

  const removeImage = (field) => {
    setDriverData({ ...driverData, [field]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(driverData).forEach((key) => {
      formData.append(key, driverData[key]);
    });

    try {
      if (editing) {
        await axios.put(`http://localhost:4000/api/drivers/${driverData.id}`, formData);
      } else {
        await axios.post("http://localhost:4000/api/drivers", formData);
      }
      fetchDrivers();
      resetForm();
    } catch (error) {
      console.error("Error saving driver:", error);
    }
  };

  const handleEdit = (driver) => {
    setDriverData(driver);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this driver?")) {
      try {
        await axios.delete(`http://localhost:4000/api/drivers/${id}`);
        fetchDrivers();
      } catch (error) {
        console.error("Error deleting driver:", error);
      }
    }
  };

  const resetForm = () => {
    setDriverData({
      id: null,
      name: "",
      phone: "",
      licenseNumber: "",
      experience: "",
      vehicleType: "",
      driverPhoto: null,
      licenseFront: null,
      licenseBack: null,
    });
    setEditing(false);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{editing ? "Edit Driver" : "Add Driver"}</h1>
          <FaUserCircle className="text-3xl cursor-pointer text-gray-600" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <input type="text" name="name" placeholder="Driver Name" onChange={handleChange} value={driverData.name} className="w-full p-2 border rounded mb-3" required />
          <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} value={driverData.phone} className="w-full p-2 border rounded mb-3" required />
          <input type="text" name="licenseNumber" placeholder="License Number" onChange={handleChange} value={driverData.licenseNumber} className="w-full p-2 border rounded mb-3" required />
          <input type="number" name="experience" placeholder="Years of Experience" onChange={handleChange} value={driverData.experience} className="w-full p-2 border rounded mb-3" required />
          <select name="vehicleType" onChange={handleChange} value={driverData.vehicleType} className="w-full p-2 border rounded mb-3" required>
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
            <option value="Bus">Bus</option>
          </select>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full hover:bg-blue-700">{editing ? "Update Driver" : "Add Driver"}</button>
        </form>

        <h2 className="text-xl font-semibold mt-6">Driver List</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          {drivers.map((driver) => (
            <div key={driver.id} className="flex justify-between items-center p-3 border-b last:border-none">
              <div>
                <p className="text-lg font-bold">{driver.name}</p>
                <p className="text-sm text-gray-600">{driver.phone} | {driver.licenseNumber}</p>
              </div>
              <div className="flex gap-3">
                <button className="text-green-600" onClick={() => handleEdit(driver)}><FaEdit /></button>
                <button className="text-red-600" onClick={() => handleDelete(driver.id)}><FaTrash /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateDrivers;