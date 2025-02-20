// import NavHome from "./NavHome";
// import Sidebar from "./Sidebar";
// import VehicleCard from "./VehicleCard";
// import corollaImage from '../assets/toyotacorolla.jpg';
// import civicImage from '../assets/hondacivic.jpg';
// import mustangImage from '../assets/fordmustang.jpg';

// const cars = [
//   { id: 1, name: "Toyota Corolla", price: "NRP 5000/day", image: corollaImage },
//     { id: 2, name: "Honda Civic", price: "NRP 8000/day", image: civicImage  },
//     { id: 3, name: "Ford Mustang", price: "NRP 15000/day", image: mustangImage }
// ];

// const Home = () => {
//   return (
//     <div>
//       <NavHome />
//       <Sidebar />
//       <div className="ml-72 mt-16 p-4 grid grid-cols-3 gap-6">
//         {cars.map((car, index) => (
//           <VehicleCard key={index} car={car} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


// import { useState, useEffect } from "react";
// import NavHome from "./NavHome";
// import Sidebar from "./Sidebar";
// import VehicleCard from "./VehicleCard";

// const Home = () => {
//   const [vehicles, setVehicles] = useState([]);

//   useEffect(() => {
//     const fetchVehicles = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/api/vehicles");
//         const data = await response.json();
//         setVehicles(data);
//       } catch (err) {
//         console.error("Failed to fetch vehicles:", err);
//       }
//     };
//     fetchVehicles();
//   }, []);

//   return (
//     <div>
//       <NavHome />
//       <Sidebar />
//       <div className="ml-72 mt-16 p-4 grid grid-cols-3 gap-6">
//         {vehicles.map((vehicle, index) => (
//           <VehicleCard key={index} car={vehicle} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import NavHome from "./NavHome";
// import Sidebar from "./Sidebar";
// import VehicleCard from "./VehicleCard";

// const Home = () => {
//   const [vehicles, setVehicles] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:4000/api/vehicles")
//       .then(response => setVehicles(response.data))
//       .catch(error => console.error("Error fetching vehicles:", error));
//   }, []);

//   return (
//     <div>
//       <NavHome />
//       <Sidebar />
//       <div className="ml-72 mt-16 p-4 grid grid-cols-3 gap-6">
//         {vehicles.map((car, index) => (
//           <VehicleCard key={index} car={car} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import NavHome from "./NavHome";
// import Sidebar from "./Sidebar";
// import VehicleCard from "./VehicleCard";

// const Home = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true); // Track loading state

//   useEffect(() => {
//     // Fetch vehicles from backend
//     axios
//       .get("http://localhost:4000/api/vehicles")
//       .then(response => {
//         setVehicles(response.data);
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch(error => {
//         console.error("Error fetching vehicles:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading vehicles...</div>; // Optional: Loading state
//   }

//   return (
//     <div>
//       <NavHome />
//       <Sidebar />
//       <div className="ml-72 mt-16 p-4 grid grid-cols-3 gap-6">
//         {vehicles.length === 0 ? (
//           <p>No vehicles available at the moment.</p> // Handle empty state
//         ) : (
//           vehicles.map((car, index) => (
//             <VehicleCard key={index} car={car} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


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

