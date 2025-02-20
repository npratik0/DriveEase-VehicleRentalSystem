import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";// Adjust the path to your sequelize instance

// class Vehicle extends Model {}

// Vehicle.init(
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     brand: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     model: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     year: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//     },
//     type: {
//       type: DataTypes.STRING,
//     },
//     seats: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     fuel: {
//       type: DataTypes.STRING,
//     },
//     transmission: {
//       type: DataTypes.STRING,
//     },
//     images: {
//       type: DataTypes.ARRAY(DataTypes.STRING), // Array of image file paths
//     },
//   },
//   {
//     sequelize,
//     modelName: 'Vehicle',
//   }
// );

// module.exports = Vehicle;

const Vehicle = sequelize.define('Vehicle', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fuel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transmission: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    // type: DataTypes.JSON,  // Store array of image URLs
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,

  },
});

export default Vehicle;
