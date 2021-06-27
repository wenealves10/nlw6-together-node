import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/authenticate.user.service";

class AuthenticateUserController {
	async handle(request: Request, response: Response) {
		const { email, password } = request.body;

		const authenticateService = new AuthenticateUserService();

		const token = await authenticateService.execute({
			email,
			password,
		});

		return response.json(token);
	}
}

export { AuthenticateUserController };
