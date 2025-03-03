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

