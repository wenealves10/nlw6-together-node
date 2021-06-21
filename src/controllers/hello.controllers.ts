import { Request, Response } from "express";

export class HelloControllers {
	async hello(request: Request, response: Response) {
		response.json({ message: "Hello World API" });
	}
}
