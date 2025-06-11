import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";

const app = express();

// Cors Configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    allowedHeaders: true,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes configuration
app.get("/", (req, res) => res.send("PlanOcean Server is running"));

export default app;
