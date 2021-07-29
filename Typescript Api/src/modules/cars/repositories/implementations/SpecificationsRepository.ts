import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationRepository{
    private specifications: Specification[]
    private static INSTANCE

    private constructor(){
        this.specifications = []
    }

    public static getInstance() {
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository()
        }

        return SpecificationRepository.INSTANCE
    }


    list(): Specification[] {
        return this.specifications
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            create_at: new Date()
        })

        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(spec => spec.name === name)
        return specification
    }

}

export { SpecificationRepository }