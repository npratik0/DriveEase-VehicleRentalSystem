import { Booking } from "./Booking/Booking.js";
import { User } from "./user/User.js";

// Define associations
User.hasMany(Booking, { foreignKey: "userId", as: "Bookings" });
Booking.belongsTo(User, { foreignKey: "userId", as: "User" });
