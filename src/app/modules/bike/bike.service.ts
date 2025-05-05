import { Bike, PrismaClient } from "@prisma/client";
import { TBike } from "./bike.interface";

const prisma = new PrismaClient();
// Create Bike into DB
const createBikeIntoDB = async (payLoad: TBike) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: payLoad.customerId,
    },
  });
  const result = await prisma.bike.create({
    data: payLoad,
  });
  return result;
};

const getBikesFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getBikeByIdFromDB = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  return result;
};

const updateBikeFromDB = async (id: string, payload: Partial<Bike>) => {
  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.bike.findUniqueOrThrow({
      where: {
        bikeId: id,
      },
    });

    const updatedBike = await transactionClient.bike.update({
      where: { bikeId: id },
      data: payload,
    });

    return updatedBike;
  });

  return result;
};

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

const deleteBikeFromDB = async (id: string) => {
  const result = await prisma.bike.delete({
    where: { bikeId: id },
  });
  return result;
};

export const BikeService = {
  createBikeIntoDB,
  getBikesFromDB,
  getBikeByIdFromDB,
  updateBikeFromDB,
  deleteBikeFromDB,
};
