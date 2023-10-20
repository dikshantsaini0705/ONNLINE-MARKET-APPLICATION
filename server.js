import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
//import cors from "cors"; // Import the 'cors' module
//import connectDB from "./config/db.js";
//import productRoutes from "productRoutes";
dotenv.config();

// Database config
//connectDB();

// Create an Express application
const app = express();

// Middleware
//app.use(cors()); // Add CORS middleware
app.use(express.json());
app.use(morgan("dev"));

// Define a route
app.get('/', (req, res) => {
  res.send('Welcome to the Marketplace application.');
});

// Define the port
const PORT = process.env.PORT || 8088;

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`.bgCyan.white); // Style the log output
});
