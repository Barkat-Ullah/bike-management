import { Router } from "express";
import { customerRoutes } from "../modules/customer/customer.route";
import { bikeRoutes } from "../modules/bike/bike.route";
import { serviceRoutes } from "../modules/service/services.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/customers",
    route: customerRoutes,
  },
  {
    path: "/bikes",
    route: bikeRoutes,
  },
  {
    path: "/services",
    route: serviceRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
