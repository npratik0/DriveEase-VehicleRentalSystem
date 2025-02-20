import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const bookings = [
    { id: 1, user: "John Doe", vehicle: "Toyota Corolla", date: "2025-02-10" },
    { id: 2, user: "Jane Smith", vehicle: "Honda Civic", date: "2025-02-12" },
  ];

  return (
    <div className="flex">
      <AdminSidebar active="dashboard" />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-4">Current Bookings</h2>
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id} className="p-3 border-b">
              {booking.user} booked {booking.vehicle} on {booking.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
