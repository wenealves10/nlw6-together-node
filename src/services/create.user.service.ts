import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../repositories/users.repositories";

interface IUserRequest {
	name: string;
	email: string;
	password: string;
	admin?: boolean;
}

class CreateUserService {
	async execute({ name, email, admin = false, password }: IUserRequest) {
		const usersRepository = getCustomRepository(UsersRepositories);

		if (!email) {
			throw new Error("Email incorrect");
		}

		const userAlreadyExists = await usersRepository.findOne({
			email,
		});

		if (userAlreadyExists) {
			throw new Error("User Already Exists");
		}

		const passwordHash = await hash(password, 8);

		const user = usersRepository.create({
			name,
			email,
			admin,
			password: passwordHash,
		});

		await usersRepository.save(user);

		return user;
	}
}

export { CreateUserService };
