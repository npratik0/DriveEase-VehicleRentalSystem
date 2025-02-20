import express from "express";
import bodyParser from "body-parser";
import { db } from "./database/index.js";
import { userRouter } from "./route/index.js";
import { authRouter } from "./route/index.js";
import dotenv from "dotenv";
import { authenticateToken } from "./middleware/token-middleware.js";
import cors from "cors";
// const vehicleRoutes = require('./routes/vehicleRoutes');
import { vehicleRouter } from "./route/vehicle/vehicleRoutes.js";
import { driverRouter } from "./route/driver/driverRoutes.js";
import path from 'path';
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use('/api', vehicleRouter);


// app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use("/uploads", express.static("uploads")); // Serve uploaded images
app.use("/api/drivers", driverRouter); 

app.use("/api/users",  userRouter);


// app.use(authenticateToken);
app.use("/api/auth", authRouter);


app.listen(port, function () {
  console.log("project running in port ");
  db();
});
