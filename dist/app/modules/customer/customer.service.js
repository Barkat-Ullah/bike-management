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
exports.customerService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Create customer into DB
const createCustomerIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.create({
        data: payLoad,
    });
    return result;
});
const getCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findMany();
    return result;
});
const getCustomerByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findUnique({ where: { id } });
    return result;
});
const updateCustomerFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.customer.findUniqueOrThrow({
            where: { id },
        });
        const updatedCustomer = yield transactionClient.customer.update({
            where: { id },
            data: payload,
        });
        return updatedCustomer;
    }));
    return result;
});
// const deleteCustomerFromDB = async (id: string) => {
//   const result = await prisma.$transaction(async (transactionClient) => {
//     await transactionClient.bike.findFirstOrThrow({
//       where: { customerId: id },
//     });
//     const deletedCustomer = await transactionClient.customer.delete({
//       where: { id },
//     });
//     return deletedCustomer;
//   });
//   return result;
// };
const deleteCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.delete({
        where: { id },
    });
    return result;
});
exports.customerService = {
    createCustomerIntoDB,
    getCustomersFromDB,
    getCustomerByIdFromDB,
    updateCustomerFromDB,
    deleteCustomerFromDB,
};
