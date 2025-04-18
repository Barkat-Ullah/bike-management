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
exports.BikeService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Create Bike into DB
const createBikeIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.create({
        data: payLoad,
    });
    return result;
});
const getBikesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.findMany();
    return result;
});
const getBikeByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.findUnique({ where: { id } });
    return result;
});
const updateBikeFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.bike.findUniqueOrThrow({
            where: { id },
        });
        const updatedBike = yield transactionClient.bike.update({
            where: { id },
            data: payload,
        });
        return updatedBike;
    }));
    return result;
});
// const deleteBikeFromDB = async (id: string) => {
//   const result = await prisma.$transaction(async (transactionClient) => {
//     await transactionClient.bike.findFirstOrThrow({
//       where: { BikeId: id },
//     });
//     const deletedBike = await transactionClient.Bike.delete({
//       where: { id },
//     });
//     return deletedBike;
//   });
//   return result;
// };
const deleteBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.delete({
        where: { id },
    });
    return result;
});
exports.BikeService = {
    createBikeIntoDB,
    getBikesFromDB,
    getBikeByIdFromDB,
    updateBikeFromDB,
    deleteBikeFromDB,
};
