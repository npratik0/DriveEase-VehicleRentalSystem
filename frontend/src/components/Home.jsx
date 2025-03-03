import { useEffect, useState } from "react";
import axios from "axios";
import NavHome from "./NavHome";
import Sidebar from "./Sidebar";
import VehicleCard from "./VehicleCard";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/vehicles")
      .then(response => {
        setVehicles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching vehicles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading vehicles...</div>;
  }

  return (
    <div>
      <NavHome />
      <Sidebar />
      <div className="ml-0 lg:ml-72 mt-16 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vehicles.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">No vehicles available at the moment.</p>
        ) : (
          vehicles.map((car, index) => <VehicleCard key={index} car={car} />)
        )}
      </div>
    </div>
  );
};

export default Home;

