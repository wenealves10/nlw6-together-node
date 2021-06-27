import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/compliments.repositories";
import { UsersRepositories } from "../repositories/users.repositories";

interface IComplimentRequest {
	tag_id: string;
	user_sender: string;
	user_receiver: string;
	message: string;
}

class CreateComplimentService {
	async execute({
		user_sender,
		user_receiver,
		tag_id,
		message,
	}: IComplimentRequest) {
		const complimentsRepository = getCustomRepository(ComplimentsRepositories);
		const usersRepository = getCustomRepository(UsersRepositories);

		if (user_sender === user_receiver) {
			throw new Error("Incorrect user receiver");
		}

		const userReceiverExists = await usersRepository.findOne(user_receiver);

		if (!userReceiverExists) {
			throw new Error("User receiver does not exists");
		}

		const compliment = complimentsRepository.create({
			tag_id,
			user_sender,
			user_receiver,
			message,
		});

		await complimentsRepository.save(compliment);

		return compliment;
	}
}

export { CreateComplimentService };
