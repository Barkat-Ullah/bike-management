"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_route_1 = require("../modules/customer/customer.route");
const bike_route_1 = require("../modules/bike/bike.route");
const services_route_1 = require("../modules/service/services.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/customers",
        route: customer_route_1.customerRoutes,
    },
    {
        path: "/bikes",
        route: bike_route_1.bikeRoutes,
    },
    {
        path: "/services",
        route: services_route_1.serviceRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
