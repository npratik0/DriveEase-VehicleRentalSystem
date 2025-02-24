// import { DataTypes } from "sequelize";
// import { sequelize } from "../../database/index.js";


// export const Booking = sequelize.define(
//   "CarBooking",
//   {
//     carId: {
//         type: DataTypes.UUID,
//         allowNull: false,
//       },
//       startDate: {
//         type: DataTypes.DATE,
//         allowNull: false,
//       },
//       endDate: {
//         type: DataTypes.DATE,
//         allowNull: false,
//       },
//       totalPrice: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//       },
//   },
// );

import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";

export const Booking = sequelize.define("VehicleBooking", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  carId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userId: { // Include this to establish the relation
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
