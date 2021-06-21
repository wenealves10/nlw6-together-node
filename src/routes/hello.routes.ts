import { Router } from "express";
import { HelloControllers } from "../controllers/hello.controllers";

const router = Router();

const helloControllers = new HelloControllers();

router.get("/", helloControllers.hello);

export { router };
