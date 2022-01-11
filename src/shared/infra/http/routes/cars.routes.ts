import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAutenticated } from "../middlewares/ensureAuthentitcated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post("/",
    ensureAutenticated,
    ensureAdmin,
    createCarController.handle
 
);

export { carsRoutes };