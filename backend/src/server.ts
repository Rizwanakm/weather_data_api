import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db";
import weatherRoutes from "./routes/weather.routes";
import { swaggerDocs } from "./swagger";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger documentation
swaggerDocs(app);

// Database connection
connectDB();

// Routes
app.use("/api/weather", weatherRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
