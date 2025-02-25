import { Booking } from "./Booking/Booking.js";
import { User } from "./user/User.js";
import Driver from "./driver/driver.js";
import { DriverBooking } from "./DriverBooking.js/DriverBooking.js";

// Define associations
User.hasMany(Booking, { foreignKey: "userId", as: "Bookings" });
Booking.belongsTo(User, { foreignKey: "userId", as: "User" });


// Define Driver Booking Associations
User.hasMany(DriverBooking, { foreignKey: "userId", as: "DriverBookings" });
DriverBooking.belongsTo(User, { foreignKey: "userId", as: "User" });

Driver.hasMany(DriverBooking, { foreignKey: "driverId", as: "DriverBookings" });
DriverBooking.belongsTo(Driver, { foreignKey: "driverId", as: "Driver" });