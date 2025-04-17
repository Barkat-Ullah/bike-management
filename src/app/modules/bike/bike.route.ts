import express from "express";
import { BikeController } from "./bike.controller";

const router = express.Router();
router.patch("/:id", BikeController.updateBike);
router.delete("/:id", BikeController.deleteBike);
router.post("/", BikeController.createBike);
router.get("/", BikeController.getBikes);
router.get("/:id", BikeController.getBikeById);
export const bikeRoutes = router;
