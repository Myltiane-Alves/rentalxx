import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
    handle(request: Request, response: Response): Response {
        const { file } = request;
        console.log(file);

        //const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

        this.importCategoryUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController }