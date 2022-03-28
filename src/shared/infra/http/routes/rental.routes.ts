import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAdmin, createRentalController.handle);

export { rentalRoutes };
