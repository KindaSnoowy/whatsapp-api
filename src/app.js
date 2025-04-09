import express from "express";
import apiRoutes from "./routes/api.js";
import whatsappService from "./services/whatsapp.services.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

whatsappService.init().catch(err => console.log("Erro na conexão:", err));

export default app;