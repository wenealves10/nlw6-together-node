import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/users.repositories";

interface IAuthenticateRequest {
	email: string;
	password: string;
}

class AuthenticateUserService {
	async execute({ email, password }: IAuthenticateRequest) {
		const usersRepository = getCustomRepository(UsersRepositories);

		const user = await usersRepository.findOne({
			email,
		});

		if (!user) {
			throw new Error("E-mail/Password Incorrect");
		}

		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) {
			throw new Error("E-mail/Password Incorrect");
		}

		const token = sign(
			{
				email,
			},
			process.env.SECRET,
			{
				subject: user.id,
				expiresIn: "1d",
			}
		);

		return token;
	}
}

export { AuthenticateUserService };
