import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on PORT ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Database connection failed:", err);
});


app.use("/api/auth", authRoutes);
