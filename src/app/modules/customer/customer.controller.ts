import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { customerService } from "./customer.service";

// Create customer
const createCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.createCustomerIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "customer created successfully",
    data: customer,
  });
});

// Get all customers
const getCustomers = catchAsync(async (req, res) => {
  const customers = await customerService.getCustomersFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "customers retrieved successfully",
    data: customers,
  });
});

// Get customer by ID
const getCustomerById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const customer = await customerService.getCustomerByIdFromDB(id);
  if (!customer) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "customer not found",
      data: null,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "customer retrieved successfully",
    data: customer,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await customerService.updateCustomerFromDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "customer updated successfully",
    data: result,
  });
});

// Delete customer
// const deleteCustomer = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   await customerService.deletecustomerFromDB(id);
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "customer deleted successfully",
//     data: null,
//   });
// });

export const customerController = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
};
