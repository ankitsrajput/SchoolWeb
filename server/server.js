import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://school-web-sooty-chi.vercel.app",
    ],
    methods: ["GET", "POST"],
}));
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/admission", admissionRoutes);

app.get("/", (req, res) => {
    res.send("School Website Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
