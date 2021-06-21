import express from "express";
import { router } from "../routes/hello.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

export { app };
