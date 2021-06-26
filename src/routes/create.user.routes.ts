import { Router } from "express";
import { CreateUsersControllers } from "../controllers/create.user.controller";

const router = Router();

const createUserControllers = new CreateUsersControllers();

router.post("/users", createUserControllers.handle);

export { router };
