import { Router } from "express";

import uploadConfig from "@config/upload";
import multer from "multer";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";

import { ensureAutenticated } from "../middlewares/ensureAuthentitcated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

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

carsRoutes.post(
  "/images/:id",
  ensureAutenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle
)

export { carsRoutes };
