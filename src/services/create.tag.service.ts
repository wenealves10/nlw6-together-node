import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/tags.repositories";

class CreateTagsService {
	async execute(name: string) {
		const tagsRepository = getCustomRepository(TagsRepositories);

		if (!name) {
			throw new Error("name incorrect");
		}

		const tagAlreadyExists = await tagsRepository.findOne({ name });

		if (tagAlreadyExists) {
			throw new Error("Tag Already Exists");
		}

		const tag = tagsRepository.create({ name });

		await tagsRepository.save(tag);

		return tag;
	}
}
export { CreateTagsService };
