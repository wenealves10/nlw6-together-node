import { Router } from "express";
import { AuthenticateUserController } from "../controllers/authenticate.user.controller";
import { CreateComplimentController } from "../controllers/create.compliment.controller";
import { CreateTagsController } from "../controllers/create.tag.controller";
import { CreateUsersController } from "../controllers/create.user.controller";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const router = Router();

const createUserController = new CreateUsersController();
const createTagController = new CreateTagsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post(
	"/tags",
	ensureAuthenticate,
	ensureAdmin,
	createTagController.handle
);
router.post("/login", authenticateUserController.handle);
router.post(
	"/compliments",
	ensureAuthenticate,
	createComplimentController.handle
);

export { router };
