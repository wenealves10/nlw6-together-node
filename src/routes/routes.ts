import { Router } from "express";
import { CreateTagsController } from "../controllers/create.tag.controller";
import { CreateUsersController } from "../controllers/create.user.controller";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUsersController();
const createTagController = new CreateTagsController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
