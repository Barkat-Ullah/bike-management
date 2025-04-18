import { PrismaClient, Service, Status } from "@prisma/client";

// service.service.ts
const prisma = new PrismaClient();

const createService = async (payload: Service) => {
  const result = await prisma.service.create({ data: payload });
  return result;
};

const getAllServices = async () => {
  return await prisma.service.findMany();
};

const getSingleService = async (id: string) => {
  return await prisma.service.findUniqueOrThrow({ where: { id } });
};
const completeService = async (id: string, completionDate?: Date) => {
  return await prisma.service.update({
    where: { id },
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
