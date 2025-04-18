import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { servicesService } from "./services.service";

// service.controller.ts
const createService = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await servicesService.createService(data);

  sendResponse(res, {
    success: true,
    message: "Service record created successfully",
    statusCode: 201,
    data: result,
  });
});
const getAllServices = catchAsync(async (req, res) => {
  const result = await servicesService.getAllServices();
  sendResponse(res, {
    success: true,
    message: "Service records fetched successfully",
    statusCode: 200,
    data: result,
  });
});
const getServiceById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await servicesService.getSingleService(id);

  sendResponse(res, {
    success: true,
    message: "Service record fetched successfully",
    statusCode: 200,
    data: result,
  });
});
const markServiceCompleted = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { completionDate } = req.body;
  const result = await servicesService.completeService(id, completionDate);

  sendResponse(res, {
    success: true,
    message: "Service marked as completed",
    statusCode: 200,
    data: result,
  });
});

export const getPendingServices = catchAsync(async (_req, res) => {
  const result = await servicesService.getPendingService();

  sendResponse(res, {
    success: true,
    message: "Overdue or pending services fetched successfully",
    statusCode: 200,
    data: result,
  });
});

export const servicesController = {
  createService,
  getAllServices,
  getServiceById,
  markServiceCompleted,
  getPendingServices,
};
