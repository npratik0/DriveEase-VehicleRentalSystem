import sitaImage from '../assets/download.jpg'
import ramImage from '../assets/download (3).jpg'
import bikashImage from '../assets/images.jpg'
const drivers = [
    {
      id: 1,
      name: "Ram Shrestha",
      experience: "5 years",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      image: ramImage, // Add driver images in the assets folder
    },
    {
      id: 2,
      name: "Sita",
      experience: "2 years",
      rating: "⭐️⭐️⭐️⭐️",
      image: sitaImage,
    },
    {
      id: 3,
      name: "Bikash Thapa",
      experience: "7 years",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      image: bikashImage,
    },
  ];
  
  const HireDriver = () => {
    return (
      <section id="hire-driver" className="py-16 px-8 bg-blue-100">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Hire a Driver</h2>
        <p className="text-center text-gray-600 mt-4">
          Need a professional driver? Choose from our trusted and experienced drivers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {drivers.map((driver) => (
            <div key={driver.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src={driver.image} alt={driver.name} className="w-full h-80 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{driver.name}</h3>
              <p className="text-gray-600">Experience: {driver.experience}</p>
              <p className="text-yellow-500">{driver.rating}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Hire Now
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HireDriver;
  