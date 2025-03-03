import { useNavigate } from 'react-router-dom';

const VehicleCard = ({ car }) => {
  const navigate = useNavigate();

  const handleRentNow = () => {
    navigate(`/vehiclecarousel/${car.id}`, { state: { car } });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-72 md:w-80 lg:w-96 mt-4">
      <img
        src={`http://localhost:4000${car.images[0]}`}
        alt={car.name}
        className="w-full h-40 md:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{car.name}</h3>
        <p className="text-gray-600 text-sm md:text-base">{car.type}</p>
        <p className="text-blue-600 font-semibold mt-2 text-base md:text-lg">NRP{car.price}/day</p>
        <button
          onClick={handleRentNow}
          className="bg-blue-600 text-white w-full py-2 rounded mt-2 hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;




  