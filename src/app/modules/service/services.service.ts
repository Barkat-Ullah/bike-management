import { PrismaClient, Service, Status } from "@prisma/client";
import { TService } from "./services.interface";

// service.service.ts
const prisma = new PrismaClient();

const createService = async (payload: TService) => {
  await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: payload.bikeId,
    },
  });
  const result = await prisma.service.create({ data: payload });
  return result;
};

const getAllServices = async () => {
  return await prisma.service.findMany();
};

const getSingleService = async (id: string) => {
  console.log("id", id);
  return await prisma.service.findUniqueOrThrow({ where: { serviceId: id } });
};
const completeService = async (id: string, completionDate?: Date) => {
  return await prisma.service.update({
    where: { serviceId: id },
    data: {
      status: "done",
      completionDate: completionDate ?? new Date(),
    },
  });
};

const getPendingService = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const filterStatus: Status[] = ["pending", "inprogress"];

  return await prisma.service.findMany({
    where: {
      serviceDate: { lt: sevenDaysAgo },
      status: { in: filterStatus },
    },
  });
};

export const servicesService = {
  createService,
  getAllServices,
  getSingleService,
  completeService,
  getPendingService,
};
