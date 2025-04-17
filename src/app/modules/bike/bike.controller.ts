import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BikeService } from "./bike.service";

// Create Bike
const createBike = catchAsync(async (req, res) => {
  const Bike = await BikeService.createBikeIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Bike created successfully",
    data: Bike,
  });
});

// Get all Bikes
const getBikes = catchAsync(async (req, res) => {
  const Bikes = await BikeService.getBikesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bikes retrieved successfully",
    data: Bikes,
  });
});

// Get Bike by ID
const getBikeById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const Bike = await BikeService.getBikeByIdFromDB(id);
  if (!Bike) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "Bike not found",
      data: null,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bike retrieved successfully",
    data: Bike,
  });
});

const updateBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeService.updateBikeFromDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bike updated successfully",
    data: result,
  });
});

// Delete Bike
const deleteBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  await BikeService.deleteBikeFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bike deleted successfully",
    data: null,
  });
});

export const BikeController = {
  createBike,
  getBikes,
  getBikeById,
  updateBike,
  deleteBike,
};
