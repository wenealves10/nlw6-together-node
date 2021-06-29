import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { TagsRepositories } from "../repositories/tags.repositories";

class ListTagsService {
	async execute() {
		const tagsRepository = getCustomRepository(TagsRepositories);

		const tags = await tagsRepository.find();

		return classToPlain(tags);
	}
}

export { ListTagsService };
