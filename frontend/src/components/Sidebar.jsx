import { useState } from "react";
import { FaFilter, FaCar, FaGasPump, FaCogs, FaUsers, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    type: "",
    price: 5000,
    fuel: "",
    transmission: "",
    seating: "",
  });

  const [collapsed, setCollapsed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="relative">
      {/* Sidebar Wrapper */}
      <div className={`bg-blue-900 text-white p-5 h-screen fixed top-16 transition-all ${collapsed ? "w-16" : "w-72"}`}>
        {/* Toggle Button */}
        <button onClick={() => setCollapsed(!collapsed)} className="absolute top-5 right-[-15px] bg-blue-700 p-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
          {collapsed ? <FaAngleDoubleRight size={20} /> : <FaAngleDoubleLeft size={20} />}
        </button>

        {!collapsed && (
          <h2 className="text-xl font-bold flex items-center gap-2 mb-5">
            <FaFilter className="text-white" /> Filter Cars
          </h2>
        )}

        {/* Car Type */}
        <div className="mb-4">
          {!collapsed && <label className="block font-medium mb-1 flex items-center gap-2 text-gray-300"><FaCar /> Car Type</label>}
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-100 text-gray-900 focus:outline-none hover:border-blue-500 transition-all"
          >
            <option value="">All</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        {/* Price Range Slider */}
        <div className="mb-4">
          {!collapsed && <label className="block font-medium mb-1 flex items-center gap-2 text-gray-300"> Price Range: NRP{filters.price}</label>}
          <input
            type="range"
            name="price"
            min="5000"
            max="20000"
            value={filters.price}
            onChange={handleChange}
            className="w-full cursor-pointer bg-gray-100 rounded-md hover:bg-blue-200 focus:outline-none"
          />
        </div>

        {/* Fuel Type */}
        <div className="mb-4">
          {!collapsed && <label className="block font-medium mb-1 flex items-center gap-2 text-gray-300"><FaGasPump /> Fuel Type</label>}
          <select
            name="fuel"
            value={filters.fuel}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-100 text-gray-900 focus:outline-none hover:border-blue-500 transition-all"
          >
            <option value="">All</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Transmission */}
        <div className="mb-4">
          {!collapsed && <label className="block font-medium mb-1 flex items-center gap-2 text-gray-300"><FaCogs /> Transmission</label>}
          <select
            name="transmission"
            value={filters.transmission}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-100 text-gray-900 focus:outline-none hover:border-blue-500 transition-all"
          >
            <option value="">All</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {/* Seating Capacity */}
        <div>
          {!collapsed && <label className="block font-medium mb-1 flex items-center gap-2 text-gray-300"><FaUsers /> Seating Capacity</label>}
          <select
            name="seating"
            value={filters.seating}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-100 text-gray-900 focus:outline-none hover:border-blue-500 transition-all"
          >
            <option value="">All</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="8+">8+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;




