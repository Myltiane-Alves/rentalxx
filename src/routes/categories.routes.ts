import { Router} from "express";
import multer from "multer";

import  { CreateCategoryController }  from
 "../modules/cars/UseCases/createCategory/CreateCategoryController";
import { listCategoriesController } from "../modules/cars/UseCases/listCategories";
import { importCategoryController } from "../modules/cars/UseCases/importCategory";
const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post('/', (request, response) => {
   return listCategoriesController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})
export { categoriesRoutes };

