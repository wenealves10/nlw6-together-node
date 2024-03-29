import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/list.user.send.compliments.service";

class ListUserSendComplimentsController {
	async handle(request: Request, response: Response) {
		const { user_id } = request;

		const listUserSendComplimentsService = new ListUserSendComplimentsService();

		const compliments = await listUserSendComplimentsService.execute(user_id);

		return response.status(200).json(compliments);
	}
}

export { ListUserSendComplimentsController };
