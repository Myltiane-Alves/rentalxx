import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";
import { ensureAutenticated } from "@shared/infra/http/middlewares/ensureAuthentitcated";

const specificationsRoutes = Router(); 

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAutenticated);
specificationsRoutes.post("/", createSpecificationController.handle)

export { specificationsRoutes };