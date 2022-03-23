import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";

import { ensureAutenticated } from "../middlewares/ensureAuthentitcated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post("/",
    ensureAutenticated,
    ensureAdmin,
    createCarController.handle,
);

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post(
    "/specifications/:id",
    ensureAutenticated,
    ensureAdmin,
    createCarSpecificationController.handle
);

export { carsRoutes };