// import { useState } from "react";
// import ProfileDropdown from "./Unused/ProfileDropdown";
// import { FaUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const NavHome = () => {
//   const [open, setOpen] = useState(false);


//   return (
//     <nav className="bg-blue-600 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">DriveEase</h1>
//         <ul className="flex space-x-6">
//           <li><Link to="/" className="hover:underline">Home</Link></li>
//           <li><Link to="/hiredriver" className="hover:underline">Hire a Driver</Link></li>
      
//           <li><Link to="/about" className="hover:underline">About</Link></li>
//           <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          
//         </ul>
//         <div className="relative">
//         <FaUserCircle size={30} className="text-white-600 cursor-pointer" onClick={() => setOpen(!open)} />
//         {open && <ProfileDropdown />}
//       </div>
//       </div>
//     </nav>
//   );
// };

// export default NavHome;

import { useState } from "react";
// import ProfileDropdown from "./Unused/ProfileDropdown";
import { FaUserCircle, FaBars } from "react-icons/fa"; // Import FaBars for mobile menu
import { Link, useNavigate } from "react-router-dom";

const NavHome = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false); // Track mobile menu state

  return (
    <nav className="sticky top-0 bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DriveEase</h1>
        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <FaBars size={30} className="cursor-pointer" onClick={() => setMobileMenu(!mobileMenu)} />
        </div>

        {/* Desktop Menu */}
        <ul className={`flex space-x-6 ${mobileMenu ? "flex-col absolute top-16 left-0 w-full bg-blue-600 p-4" : "hidden lg:flex"}`}>
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/hiredriver" className="hover:underline">Hire a Driver</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          {/* <li><Link to="/profile" className="hover:underline">Profile</Link></li> */}

        </ul>

        <div>
          <FaUserCircle
            size={30}
            className="text-white-600 cursor-pointer"
            onClick={() => navigate("/profile")} // Navigate to the profile page
          />
        </div>
      </div>
    </nav>
  );
};

export default NavHome;

