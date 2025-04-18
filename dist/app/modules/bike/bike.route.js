"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.patch("/:id", bike_controller_1.BikeController.updateBike);
router.delete("/:id", bike_controller_1.BikeController.deleteBike);
router.post("/", bike_controller_1.BikeController.createBike);
router.get("/", bike_controller_1.BikeController.getBikes);
router.get("/:id", bike_controller_1.BikeController.getBikeById);
exports.bikeRoutes = router;
