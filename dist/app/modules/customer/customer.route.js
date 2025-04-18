"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.patch("/:id", customer_controller_1.customerController.updateCustomer);
router.delete("/:id", customer_controller_1.customerController.deleteCustomer);
router.post("/", customer_controller_1.customerController.createCustomer);
router.get("/", customer_controller_1.customerController.getCustomers);
router.get("/:id", customer_controller_1.customerController.getCustomerById);
exports.customerRoutes = router;
