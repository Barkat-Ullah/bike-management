import { Customer, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// Create customer into DB
const createCustomerIntoDB = async (payLoad: Customer) => {
  const result = await prisma.customer.create({
    data: payLoad,
  });
  return result;
};

const getCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getCustomerByIdFromDB = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId: id },
  });
  return result;
};

const updateCustomerFromDB = async (id: string, payload: Partial<Customer>) => {
  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.customer.findUniqueOrThrow({
      where: {
        customerId: id,
      },
    });

    const updatedCustomer = await transactionClient.customer.update({
      where: {
        customerId: id,
      },
      data: payload,
    });

    return updatedCustomer;
  });

  return result;
};

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

const deleteCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const customerService = {
  createCustomerIntoDB,
  getCustomersFromDB,
  getCustomerByIdFromDB,
  updateCustomerFromDB,
  deleteCustomerFromDB,
};
