import { AppError } from "@errors/AppError";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    description: string;
}

injectable()
class CreateCategoryUseCase {
    constructor(
     @inject("CategoriesRepository")   
     private categoriesRepository: ICategoriesRepository) {}

    async execute({ description, name}: IRequest): Promise<void> {     
        const categoryAllreadyExists = await this.categoriesRepository.findByName(
            name
        );

        if (categoryAllreadyExists) {
           throw new AppError("Category Already exists!")
        }
        
        this.categoriesRepository.create( { name, description}); 
    }
}

export { CreateCategoryUseCase }