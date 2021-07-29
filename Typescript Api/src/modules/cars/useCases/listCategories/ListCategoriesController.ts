import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
    constructor(private categoryRepository: ListCategoriesUseCase){

    }
    handle(request: Request, response: Response): Response {
        const all = this.categoryRepository.execute()
        return response.json(all).send()
    }
}

export { ListCategoriesController }