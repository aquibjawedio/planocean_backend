import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/connectDB.js";

// Importing all routes here
import healthCheckRouter from "./routes/healthcheck.route.js";

const app = express();

// Cors Configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
connectDB();

// Routes configuration
app.use("/api/v1/healthcheck", healthCheckRouter);

export default app;
