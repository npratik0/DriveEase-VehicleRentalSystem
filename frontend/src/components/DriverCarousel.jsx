// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import NavHome from "./NavHome";

// const DriverCarousel = () => {
//   const { state } = useLocation();
//   const { driver } = state;

//   // Extract userId from JWT token
//   const token = localStorage.getItem("token");
//   const decodedPayload = JSON.parse(atob(token.split(".")[1]));
//   const userId = decodedPayload.user.id; 

//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const navigate = useNavigate();

//   const handleBookDriver = (e) => {
//     e.preventDefault();

//     // Validate start and end dates
//     if (!startDate || !endDate) {
//       alert("Please select both start and end dates.");
//       return;
//     }

//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     if (end <= start) {
//       alert("End date must be after the start date.");
//       return;
//     }

//     // Navigate to Driver Booking Confirmation Page
//     navigate("/driver-booking", {
//       state: {
//         driver,
//         userId,
//         startDate,
//         endDate,
//       },
//     });
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <NavHome />
//       <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        
//         {/* Left Side: Driver Details */}
//         <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden p-6">
//           <h2 className="text-2xl font-semibold text-center text-blue-600">{driver.name}</h2>
//           <div className="flex justify-center mt-4">
//             <img
//               src={`http://localhost:4000/${driver.driverPhoto}`}
//               alt={driver.name}
//               className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
//             />
//           </div>
//           <div className="text-center mt-4">
//             <p className="text-gray-600"><strong>Phone:</strong> {driver.phone}</p>
//             <p className="text-gray-600"><strong>Vehicle Type:</strong> {driver.vehicleType}</p>
//             <p className="text-gray-600"><strong>Experience:</strong> {driver.experience} years</p>
//           </div>
//         </div>

//         {/* Right Side: Booking Form */}
//         <div className="md:w-1/3 bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Book This Driver</h3>
//           <form onSubmit={handleBookDriver} className="space-y-4">
//             <div>
//               <label htmlFor="start-date" className="block text-sm font-semibold">Start Date</label>
//               <input
//                 type="date"
//                 id="start-date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="w-full p-3 border rounded-lg mt-2"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="end-date" className="block text-sm font-semibold">End Date</label>
//               <input
//                 type="date"
//                 id="end-date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="w-full p-3 border rounded-lg mt-2"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
//             >
//               Confirm Booking
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverCarousel;

// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import NavHome from "./NavHome";

// const DRIVER_PRICE_PER_DAY = 1500; // Set price per day

// const DriverCarousel = () => {
//   const { state } = useLocation();
//   const { driver } = state;

//   // Extract userId from JWT token
//   const token = localStorage.getItem("token");
//   const decodedPayload = JSON.parse(atob(token.split(".")[1]));
//   const userId = decodedPayload.user.id; 

//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [totalPrice, setTotalPrice] = useState(0);
//   const navigate = useNavigate();

//   const calculatePrice = (start, end) => {
//     const startTime = new Date(start);
//     const endTime = new Date(end);
//     const days = Math.ceil((endTime - startTime) / (1000 * 60 * 60 * 24));
//     return days * DRIVER_PRICE_PER_DAY;
//   };

//   const handleDateChange = () => {
//     if (startDate && endDate) {
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       if (end > start) {
//         setTotalPrice(calculatePrice(startDate, endDate));
//       } else {
//         setTotalPrice(0);
//       }
//     }
//   };

//   const handleBookDriver = (e) => {
//     e.preventDefault();

//     if (!startDate || !endDate) {
//       alert("Please select both start and end dates.");
//       return;
//     }

//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     if (end <= start) {
//       alert("End date must be after the start date.");
//       return;
//     }

//     navigate("/driver-booking", {
//       state: {
//         driver,
//         userId,
//         startDate,
//         endDate,
//         totalPrice,
//       },
//     });
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <NavHome />
//       <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        
//         {/* Left Side: Driver Details */}
//         <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden p-6">
//           <h2 className="text-2xl font-semibold text-center text-blue-600">{driver.name}</h2>
//           <div className="flex justify-center mt-4">
//             <img
//               src={`http://localhost:4000/${driver.driverPhoto}`}
//               alt={driver.name}
//               className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
//             />
//           </div>
//           <div className="text-center mt-4">
//             <p className="text-gray-600"><strong>Phone:</strong> {driver.phone}</p>
//             <p className="text-gray-600"><strong>Vehicle Type:</strong> {driver.vehicleType}</p>
//             <p className="text-gray-600"><strong>Experience:</strong> {driver.experience} years</p>
//           </div>
//         </div>

//         {/* Right Side: Booking Form */}
//         <div className="md:w-1/3 bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Book This Driver</h3>
//           <p className="text-blue-600 font-semibold">Driver charge per day is ₹1500</p>
          
//           <form onSubmit={handleBookDriver} className="space-y-4">
//             <div>
//               <label htmlFor="start-date" className="block text-sm font-semibold">Start Date</label>
//               <input
//                 type="date"
//                 id="start-date"
//                 value={startDate}
//                 onChange={(e) => {
//                   setStartDate(e.target.value);
//                   handleDateChange();
//                 }}
//                 className="w-full p-3 border rounded-lg mt-2"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="end-date" className="block text-sm font-semibold">End Date</label>
//               <input
//                 type="date"
//                 id="end-date"
//                 value={endDate}
//                 onChange={(e) => {
//                   setEndDate(e.target.value);
//                   handleDateChange();
//                 }}
//                 className="w-full p-3 border rounded-lg mt-2"
//                 required
//               />
//             </div>

//             {/* Display Total Price */}
//             {totalPrice > 0 && (
//               <p className="text-lg font-semibold text-green-600 mt-2">
//                 Total Price: ₹{totalPrice}
//               </p>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
//             >
//               Confirm Booking
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverCarousel;

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavHome from "./NavHome";

const DRIVER_PRICE_PER_DAY = 1500; // Price per day

const DriverCarousel = () => {
  const { state } = useLocation();
  const { driver } = state;

  // Extract userId from JWT token
  const token = localStorage.getItem("token");
  const decodedPayload = JSON.parse(atob(token.split(".")[1]));
  const userId = decodedPayload.user.id;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // Function to calculate total price
  const calculatePrice = (start, end) => {
    if (!start || !end) return 0;
    const startTime = new Date(start);
    const endTime = new Date(end);

    if (endTime <= startTime) return 0;

    const days = Math.ceil((endTime - startTime) / (1000 * 60 * 60 * 24));
    return days * DRIVER_PRICE_PER_DAY;
  };

  // Update total price whenever dates change
  useEffect(() => {
    setTotalPrice(calculatePrice(startDate, endDate));
  }, [startDate, endDate]);

  const handleBookDriver = (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    if (totalPrice === 0) {
      alert("End date must be after the start date.");
      return;
    }

    navigate("/driver-booking", {
      state: {
        driver,
        userId,
        startDate,
        endDate,
        totalPrice,
      },
    });
  };

  return (
    <div className="container mx-auto p-6">
      <NavHome />
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        
        {/* Left Side: Driver Details */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h2 className="text-2xl font-semibold text-center text-blue-600">{driver.name}</h2>
          <div className="flex justify-center mt-4">
            <img
              src={`http://localhost:4000/${driver.driverPhoto}`}
              alt={driver.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600"><strong>Phone:</strong> {driver.phone}</p>
            <p className="text-gray-600"><strong>Vehicle Type:</strong> {driver.vehicleType}</p>
            <p className="text-gray-600"><strong>Experience:</strong> {driver.experience} years</p>
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="md:w-1/3 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Book This Driver</h3>
          <p className="text-blue-600 font-semibold">Driver charge per day is ₹{DRIVER_PRICE_PER_DAY}</p>
          
          <form onSubmit={handleBookDriver} className="space-y-4">
            <div>
              <label htmlFor="start-date" className="block text-sm font-semibold">Start Date</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border rounded-lg mt-2"
                required
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm font-semibold">End Date</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 border rounded-lg mt-2"
                required
              />
            </div>

            {/* Display Total Price (Always Show) */}
            <p className={`text-lg font-semibold mt-2 ${totalPrice > 0 ? "text-green-600" : "text-red-500"}`}>
              Total Price: ₹{totalPrice}
            </p>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DriverCarousel;


