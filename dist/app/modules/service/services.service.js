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
exports.servicesService = void 0;
const client_1 = require("@prisma/client");
// service.service.ts
const prisma = new client_1.PrismaClient();
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.create({ data: payload });
    return result;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.service.findMany();
});
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.service.findUniqueOrThrow({ where: { id } });
});
const completeService = (id, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.service.update({
        where: { id },
        data: {
            status: "done",
            completionDate: completionDate !== null && completionDate !== void 0 ? completionDate : new Date(),
        },
    });
});
const getPendingService = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello pending");
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const filterStatus = ["pending", "inprogress"];
    return yield prisma.service.findMany({
        where: {
            serviceDate: { lt: sevenDaysAgo },
            status: { in: filterStatus },
        },
    });
});
exports.servicesService = {
    createService,
    getAllServices,
    getSingleService,
    completeService,
    getPendingService,
};
