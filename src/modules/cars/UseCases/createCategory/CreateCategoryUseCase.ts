import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name}: IRequest): void {
        
        const categoryAllreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAllreadyExists) {
           throw new Error("Category Already exists!")
        }
        
        this.categoriesRepository.create( { name, description}); 
    }
}

export { CreateCategoryUseCase }