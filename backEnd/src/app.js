import express from "express";
import cors from "cors";
import homeDataRouter from "./routers/home.router.js";
import moviesRouter from "./routers/movies.router.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/home", homeDataRouter);
app.use("/api/movies", moviesRouter);

export default app;