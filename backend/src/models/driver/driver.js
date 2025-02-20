import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";


const Driver = sequelize.define("Driver", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  licenseNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  driverPhoto: {
    type: DataTypes.STRING, // Path to the image
    allowNull: false,
  },
  licenseFront: {
    type: DataTypes.STRING, // Path to the image
    allowNull: false,
  },
  licenseBack: {
    type: DataTypes.STRING, // Path to the image
    allowNull: false,
  },
});

export default Driver;
