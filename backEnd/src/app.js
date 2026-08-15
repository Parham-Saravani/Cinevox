import express from "express";
import cors from "cors";
import homeDataRouter from "./routers/home.router.js";
const app = express();
app.use(cors());
app.use(express.json())
app.use("/api/home", homeDataRouter);
export default app;
