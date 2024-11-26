// Pass Supabase: TojRH6pSi1SYDab2
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server load port ${PORT}`));
