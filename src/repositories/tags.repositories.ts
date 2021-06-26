import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/tags.entity";

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };
