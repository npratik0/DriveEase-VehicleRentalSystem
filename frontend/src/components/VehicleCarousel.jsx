import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavHome from "./NavHome";

const VehicleCarousel = () => {
  const { state } = useLocation();
  const { car } = state;

  // Extract userId from the JWT token
  const token = localStorage.getItem("token");
  const decodedPayload = JSON.parse(atob(token.split(".")[1]));
  const userId = decodedPayload.user.id; // Ensure this matches the field in your token payload

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleRent = (e) => {
    e.preventDefault();

    // Validate start and end dates
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Ensure end date is after start date
    if (end <= start) {
      alert("End date must be after the start date.");
      return;
    }

    // Calculate total price
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Calculate number of days
    const totalPrice = days * car.price;

    // Navigate to Booking Confirmation Page
    navigate("/booking-confirmation", {
      state: {
        car,
        userId, // Pass the userId
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
        {/* Left side: Vehicle Details */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-2xl font-semibold text-center text-blue-600 p-4">{car.name}</h2>
          <div className="relative">
            <div className="w-full overflow-x-auto flex space-x-4 py-4">
              {car.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:4000${image}`}
                  alt={`${car.name} ${index + 1}`}
                  className="w-full h-100 object-cover rounded-lg border-2 border-blue-600"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side: Rental Form */}
        <div className="md:w-1/3 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Vehicle Details</h3>
          <p><strong>Brand:</strong> {car.brand}</p>
          <p><strong>Model:</strong> {car.model}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Price:</strong> NRP{car.price}/day</p>
          <p><strong>Seats:</strong> {car.seats}</p>
          <p><strong>Fuel:</strong> {car.fuel}</p>
          <p><strong>Transmission:</strong> {car.transmission}</p>

          <h3 className="text-lg font-semibold text-blue-600 mt-6 mb-4">Rent This Vehicle</h3>
          <form onSubmit={handleRent} className="space-y-4">
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
            >
              Rent Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleCarousel;

