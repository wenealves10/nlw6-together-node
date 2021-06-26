import express from "express";
import "express-async-errors";
import myError from "../error/error";
import { router } from "../routes/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(myError.error);
export { app };
