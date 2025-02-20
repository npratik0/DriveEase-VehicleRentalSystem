// import { DataTypes } from "sequelize";
// import { sequelize } from "../../database/index.js";


// export const User=sequelize.define("Users",{
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       password:{
//         type:DataTypes.STRING
//       }
// })

import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";
// import bcrypt from "bcrypt";

export const User = sequelize.define(
  "Clients",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Ensures valid email format
      },
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true, // Ensures only numbers are allowed
        len: [10, 10], // Limits length between 10 and 15 digits
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  // {
  //   tableName: "Client",
  //   timestamps: true, // Enables automatic createdAt and updatedAt
  //   hooks: {
  //     beforeCreate: async (user) => {
  //       if (user.password) {
  //         const salt = await bcrypt.genSalt(10);
  //         user.password = await bcrypt.hash(user.password, salt);
  //       }
  //     },
  //   },
  // }
);