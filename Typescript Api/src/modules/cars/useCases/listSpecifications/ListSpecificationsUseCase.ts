import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
    constructor(private listSpecificationUseCase: ISpecificationRepository){

    }

    execute(): Specification[]{
        const specications = this.listSpecificationUseCase.list()

        return specications
    }

}

export { ListSpecificationUseCase }