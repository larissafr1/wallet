import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";

connectDb();

// Armazena execução do express
const app = express ();

app.use(json());
app.use(authRouter);

const port = process.env.PORT
app.listen(port, ()=> console.log(`Server listening in port ${port}`));
