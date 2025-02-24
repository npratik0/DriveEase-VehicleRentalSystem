export * from "./user/User.js";
export * from "./vehicle/Vehicle.js";

import { sequelize } from "../database/index.js";
import { User } from "./user/User.js";
import { Booking } from "./Booking/Booking.js";

const models = {
  User,
  Booking,
};

// Ensure associations are established
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export default models;

