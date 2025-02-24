// import React, { useEffect, useState } from "react";
// import DriverCard from "./DriverCard";
// import { useNavigate } from "react-router-dom";

// const DriverPage = () => {
//   const [drivers, setDrivers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDrivers = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/api/drivers");
//         const data = await response.json();
//         setDrivers(data);
//       } catch (error) {
//         console.error("Error fetching drivers:", error);
//       }
//     };

//     fetchDrivers();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">Available Drivers</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {drivers.map((driver) => (
//           <DriverCard key={driver.id} driver={driver} onViewDetails={(id) => navigate(`/drivers/${id}`)} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DriverPage;

import React, { useEffect, useState } from "react";
import DriverCard from "./DriverCard";
import NavHome from "./NavHome";

const DriverPage = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/drivers")
      .then((res) => res.json())
      .then((data) => setDrivers(data))
      .catch((err) => console.error("Error fetching drivers:", err));
  }, []);

  return (
    <>
    <NavHome></NavHome>
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Available Drivers</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
    </>
    
  );
};

export default DriverPage;

