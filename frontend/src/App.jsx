import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Home from "./components/Home";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HireDriver from "./components/HireDriver";
import Home from "./components/Home";
import DriverCard from "./components/DriverCard";
import AdminPage from "./components/AdminPage";
import AdminDashboard from "./components/AdminDashboard";
import AdminDrivers from "./components/AdminDrivers";
import AdminLogin from "./components/AdminLogin";
import AdminVehicles from "./components/AdminVehicles";
import VehicleCarousel from "./components/VehicleCarousel";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hire" element={<HireDriver/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/hiredriver" element={<DriverCard/>}></Route>
        <Route path="/vehiclecarousel/:id" element={<VehicleCarousel/>}></Route>
        {/* <Route path="/admin" element={<AdminPage/>}/> */}

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminPage />} />
        <Route path="/admin/vehicles" element={<AdminVehicles />} />
        <Route path="/admin/drivers" element={<AdminDrivers />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;