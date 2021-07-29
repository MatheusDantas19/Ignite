import { Request, Response } from 'express'
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";
class ListSpecificationController {
    constructor(private specificationRepository: ListSpecificationUseCase){

    }

    handle(request: Request, response: Response): Response{
        const all = this.specificationRepository.execute()

        return response.json(all)
    }
}

export { ListSpecificationController }