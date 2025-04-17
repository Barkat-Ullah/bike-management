import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();
router.patch("/:id", customerController.updateCustomer);
// router.delete("/",customerController);
router.post("/", customerController.createCustomer);
router.get("/", customerController.getCustomers);
router.get("/:id", customerController.getCustomerById);
export const customerRoutes = router;
