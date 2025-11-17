import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authroutes.js";
import complaintRoutes from "./src/routes/Complaintroutes.js";
const app = express();

app.use(cors({
  origin: "https://duvidha-ki-suvidha.vercel.app",
  credentials: true
}));

app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/complaints", complaintRoutes);

// health route
app.get("/", (req, res) => {
  res.status(200).send("ok");
});

// port for render
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
