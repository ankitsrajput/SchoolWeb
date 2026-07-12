import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes/admissionRoute.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", Routes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("School Website Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
