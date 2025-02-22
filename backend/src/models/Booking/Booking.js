import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";


export const Booking = sequelize.define(
  "Booking",
  {
    carId: {
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
  },
);