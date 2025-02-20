// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import VehicleList from "../components/VehicleList";
// import Footer from "../components/Footer";


// import { useEffect } from "react";
// import Navbar from './Navbar';
// import Hero from './Hero';
// import VehicleList from './VehilcleList';
// import Footer from './Footer';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';
// import HireDriver from './HireDriver';



// const Home = () => {
//   useEffect(() => {
//     const handleNavClick = (event) => {
//       event.preventDefault();
//       const targetId = event.currentTarget.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     };

//     document.querySelectorAll("nav a").forEach((link) => {
//       link.addEventListener("click", handleNavClick);
//     });

//     return () => {
//       document.querySelectorAll("nav a").forEach((link) => {
//         link.removeEventListener("click", handleNavClick);
//       });
//     };
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <VehicleList />
//       <HireDriver/>
//       <AboutUs/>
//       <ContactUs/>
//       <Footer />
//     </div>
//   );
// };

// export default Home;


import { useEffect } from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
// import VehicleList from "./VehilcleList";
import VehicleList from "./VehilcleList";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HireDriver from "./HireDriver";

const Landing = () => {
  // useEffect(() => {
  //   const handleNavClick = (event) => {
  //     event.preventDefault();
  //     const targetId = event.currentTarget.getAttribute("href").substring(1);
  //     const targetElement = document.getElementById(targetId);
  //     if (targetElement) {
  //       targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   };

  //   document.querySelectorAll("nav a").forEach((link) => {
  //     link.addEventListener("click", handleNavClick);
  //   });

  //   return () => {
  //     document.querySelectorAll("nav a").forEach((link) => {
  //       link.removeEventListener("click", handleNavClick);
  //     });
  //   };
  // }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <VehicleList />

      {/* Wrapping each section with an id */}
      <div id="hire"><HireDriver /></div>
      <div id="about"><AboutUs /></div>
      <div id="contact"><ContactUs /></div>

      <Footer />
    </div>
  );
};

export default Landing;
