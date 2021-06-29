import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { UsersRepositories } from "../repositories/users.repositories";

class ListUsersService {
	async execute() {
		const usersRepository = getCustomRepository(UsersRepositories);

		const users = await usersRepository.find();

		return classToPlain(users);
	}
}
export { ListUsersService };
