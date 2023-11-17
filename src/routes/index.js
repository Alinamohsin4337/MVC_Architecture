import { Router } from "express";
import productRouter from "./product/index.js";
import router from "./student/index.js";
import newRouter from "./new/index.js";
const allRoutes = Router();
allRoutes.use("/", productRouter);
allRoutes.use("/", router);
allRoutes.use("/", newRouter);
export default allRoutes;
