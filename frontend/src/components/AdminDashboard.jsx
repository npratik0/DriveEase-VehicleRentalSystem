// import AdminSidebar from "./AdminSidebar";

// const AdminDashboard = () => {
  

//   return (
//     <div className="flex">
//       <AdminSidebar active="dashboard" />
//       <div className="flex-1 p-6">
//         <h2 className="text-3xl font-semibold mb-4">Current Bookings</h2>
//         <ul>
          
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/booking");
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="flex">
      <AdminSidebar active="dashboard" />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-4">Current Bookings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Booking ID</th>
                <th className="py-3 px-4 border-b text-left">User</th>
                <th className="py-3 px-4 border-b text-left">Car ID</th>
                <th className="py-3 px-4 border-b text-left">Start Date</th>
                <th className="py-3 px-4 border-b text-left">End Date</th>
                <th className="py-3 px-4 border-b text-left">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{booking.id}</td>
                  <td className="py-3 px-4 border-b">
                    {booking.User ? (
                      <>
                        <p>{booking.User.name}</p>
                        <p className="text-sm text-gray-500">{booking.User.email}</p>
                      </>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="py-3 px-4 border-b">{booking.carId}</td>
                  <td className="py-3 px-4 border-b">
                    {new Date(booking.startDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {new Date(booking.endDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 border-b">${booking.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
