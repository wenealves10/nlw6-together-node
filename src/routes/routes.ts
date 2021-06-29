import { Router } from "express";
import { AuthenticateUserController } from "../controllers/authenticate.user.controller";
import { CreateComplimentController } from "../controllers/create.compliment.controller";
import { CreateTagsController } from "../controllers/create.tag.controller";
import { CreateUsersController } from "../controllers/create.user.controller";
import { ListTagsController } from "../controllers/list.tags.controller";
import { ListUserReceiveComplimentsController } from "../controllers/list.user.receive.compliments.controller";
import { ListUserSendComplimentsController } from "../controllers/list.user.send.compliments.controller";
import { ListUsersController } from "../controllers/list.users.controller";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const router = Router();

const createUserController = new CreateUsersController();
const listUsersController = new ListUsersController();
const createTagController = new CreateTagsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
	new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
	new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();

router.post("/users", createUserController.handle);

router.get(
	"/users",
	ensureAuthenticate,
	ensureAdmin,
	listUsersController.handle
);

router.post(
	"/tags",
	ensureAuthenticate,
	ensureAdmin,
	createTagController.handle
);

router.get("/tags", ensureAuthenticate, listTagsController.handle);

router.post("/login", authenticateUserController.handle);

router.post(
	"/compliments",
	ensureAuthenticate,
	createComplimentController.handle
);

router.get(
	"/users/compliments/receive",
	ensureAuthenticate,
	listUserReceiveComplimentsController.handle
);

router.get(
	"/users/compliments/send",
	ensureAuthenticate,
	listUserSendComplimentsController.handle
);

export { router };
