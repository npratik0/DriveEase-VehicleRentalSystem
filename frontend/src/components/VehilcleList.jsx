import corollaImage from '../assets/toyotacorolla.jpg';
import civicImage from '../assets/hondacivic.jpg';
import mustangImage from '../assets/fordmustang.jpg';

const vehicles = [
  { id: 1, name: "Toyota Corolla", price: "NRP 5000/day", image: corollaImage },
  { id: 2, name: "Honda Civic", price: "NRP 8000/day", image: civicImage  },
  { id: 3, name: "Ford Mustang", price: "NRP 15000/day", image: mustangImage }
];

const VehicleList = () => {
  return (
    <section className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center">Available Cars</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {vehicles.map(car => (
          <div key={car.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={car.image} alt={car.name} className="mx-auto mb-4 rounded-md"/>
            <h3 className="text-xl font-semibold">{car.name}</h3>
            <p className="text-blue-600 font-bold">{car.price}</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleList;
