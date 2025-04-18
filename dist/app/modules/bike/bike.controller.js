"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const bike_service_1 = require("./bike.service");
// Create Bike
const createBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Bike = yield bike_service_1.BikeService.createBikeIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Bike created successfully",
        data: Bike,
    });
}));
// Get all Bikes
const getBikes = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Bikes = yield bike_service_1.BikeService.getBikesFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bikes retrieved successfully",
        data: Bikes,
    });
}));
// Get Bike by ID
const getBikeById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Bike = yield bike_service_1.BikeService.getBikeByIdFromDB(id);
    if (!Bike) {
        return (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Bike not found",
            data: null,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bike retrieved successfully",
        data: Bike,
    });
}));
const updateBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bike_service_1.BikeService.updateBikeFromDB(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bike updated successfully",
        data: result,
    });
}));
// Delete Bike
const deleteBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield bike_service_1.BikeService.deleteBikeFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bike deleted successfully",
        data: null,
    });
}));
exports.BikeController = {
    createBike,
    getBikes,
    getBikeById,
    updateBike,
    deleteBike,
};
