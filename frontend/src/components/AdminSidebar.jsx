import { Link } from "react-router-dom";

const AdminSidebar = ({ active }) => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
      <ul>
        <li className={`p-3 ${active === "dashboard" ? "bg-gray-700" : ""}`}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li className={`p-3 ${active === "vehicles" ? "bg-gray-700" : ""}`}>
          <Link to="/admin/vehicles">Vehicles</Link>
        </li>
        <li className={`p-3 ${active === "drivers" ? "bg-gray-700" : ""}`}>
          <Link to="/admin/drivers">Drivers</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default AdminSidebar;
