import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/compliments.repositories";

class ListUserSendComplimentsService {
	async execute(user_id: string) {
		const complimentsRepository = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepository.find({
			where: {
				user_sender: user_id,
			},
		});

		return compliments;
	}
}

export { ListUserSendComplimentsService };
