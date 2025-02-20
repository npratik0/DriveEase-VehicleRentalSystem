import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DriveEase</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/hire" className="hover:underline">Hire a Driver</Link></li>
      
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          <li><Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Login</Link></li>
          {/* <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">Log in</button> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
