import { Request, Response } from "express";
import { CreateTagsService } from "../services/create.tag.service";

class CreateTagsController {
	async handle(request: Request, response: Response) {
		const createTagsService = new CreateTagsService();
		const { name } = request.body;

		const tag = await createTagsService.execute(name);

		return response.status(200).json(tag);
	}
}

export { CreateTagsController };
