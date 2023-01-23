import express from "express";
import morgan from "morgan";
import languageRoutes from "./routes/language.routes"

const app  = express();

// settings

app.set("port", 4000);

// Middlewares: funciones entre una peticion y respuesta

app.use(morgan("dev"))
app.use(express.json())

// Routes

app.use("/api/languages", languageRoutes)

export default app;