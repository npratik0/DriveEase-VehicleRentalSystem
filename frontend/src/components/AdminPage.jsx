// import React, { useState } from "react";
// // import AdminSidebar from "../components/AdminSidebar";
// // import AdminDashboard from "../components/AdminDashboard";
// // import VehicleManagement from "../components/VehicleManagement";
// // import DriverManagement from "../components/DriverManagement";
// import AdminSidebar from "./AdminSidebar";
// import AdminDashboard from "./AdminDashboard";
// import VehicleManagement from "./VehicleManagement";
// import DriverManagement from "./DriverManagement";

// const AdminPage = () => {
//   const [activeSection, setActiveSection] = useState("dashboard");

//   return (
//     <div className="flex">
//       <AdminSidebar setActiveSection={setActiveSection} />
//       {activeSection === "dashboard" && <AdminDashboard />}
//       {activeSection === "vehicles" && <VehicleManagement />}
//       {activeSection === "drivers" && <DriverManagement />}
//     </div>
//   );
// };

// export default AdminPage;

import { useState } from "react";
import { FaUserCircle, FaSignOutAlt, FaEdit } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";

const AdminPage = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [adminDetails, setAdminDetails] = useState({
    username: "admin",
    email: "admin@example.com",
    password: "12345",
  });

  const [editMode, setEditMode] = useState(false);
  const [editedDetails, setEditedDetails] = useState({ ...adminDetails });

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setEditMode(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setAdminDetails(editedDetails);
    setEditMode(false);
  };

  const handleChange = (e) => {
    setEditedDetails({ ...editedDetails, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    alert("Logging out...");
    // Redirect to admin login page or clear session
    window.location.href = "/admin";
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <FaUserCircle
            className="text-4xl cursor-pointer text-blue-600"
            onClick={toggleProfile}
          />
        </div>

        {/* Profile Section */}
        {showProfile && (
          <div className="absolute right-6 top-16 bg-white shadow-md p-4 rounded-md w-72">
            <h2 className="text-lg font-semibold mb-2">Admin Profile</h2>
            <div className="border-b pb-2 mb-2">
              {editMode ? (
                <>
                  <input
                    type="text"
                    name="username"
                    value={editedDetails.username}
                    onChange={handleChange}
                    className="border p-1 w-full mb-2"
                  />
                  <input
                    type="email"
                    name="email"
                    value={editedDetails.email}
                    onChange={handleChange}
                    className="border p-1 w-full mb-2"
                  />
                  <input
                    type="password"
                    name="password"
                    value={editedDetails.password}
                    onChange={handleChange}
                    className="border p-1 w-full mb-2"
                  />
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-3 py-1 rounded-md"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p><strong>Username:</strong> {adminDetails.username}</p>
                  <p><strong>Email:</strong> {adminDetails.email}</p>
                  <p><strong>Password:</strong> {adminDetails.password}</p>
                  <button
                    className="flex items-center mt-2 text-blue-500"
                    onClick={handleEditClick}
                  >
                    <FaEdit className="mr-1" /> Edit Profile
                  </button>
                </>
              )}
            </div>
            <button
              className="flex items-center bg-red-500 text-white px-3 py-1 rounded-md w-full justify-center"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-1" /> Logout
            </button>
          </div>
        )}

        {/* Other Admin Page Content */}
        <p className="mt-4">Welcome to the admin panel. Select an option from the sidebar.</p>
      </div>
    </div>
  );
};

export default AdminPage;

