import express from "express";
import { servicesController } from "./services.controller";

const router = express.Router();
router.put("/:id/complete", servicesController.markServiceCompleted);
router.post("/", servicesController.createService);
router.get("/", servicesController.getAllServices);
router.get("/:id", servicesController.getServiceById);
export const serviceRoutes = router;
