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
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesController = exports.getPendingServices = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const services_service_1 = require("./services.service");
// service.controller.ts
const createService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield services_service_1.servicesService.createService(data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Service record created successfully",
        statusCode: 201,
        data: result,
    });
}));
const getAllServices = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.servicesService.getAllServices();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Service records fetched successfully",
        statusCode: 200,
        data: result,
    });
}));
const getServiceById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_service_1.servicesService.getSingleService(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Service record fetched successfully",
        statusCode: 200,
        data: result,
    });
}));
const markServiceCompleted = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { completionDate } = req.body;
    const result = yield services_service_1.servicesService.completeService(id, completionDate);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Service marked as completed",
        statusCode: 200,
        data: result,
    });
}));
exports.getPendingServices = (0, catchAsync_1.catchAsync)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.servicesService.getPendingService();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Overdue or pending services fetched successfully",
        statusCode: 200,
        data: result,
    });
}));
exports.servicesController = {
    createService,
    getAllServices,
    getServiceById,
    markServiceCompleted,
    getPendingServices: exports.getPendingServices,
};
