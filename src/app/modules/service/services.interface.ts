import { Status } from "@prisma/client";

export type TService = {
  bikeId: string;
  serviceDate: string | Date;
  description: string;
  status: Status;
  completionDate?: string | Date;
};
