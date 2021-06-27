import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/compliment.entity";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories };
