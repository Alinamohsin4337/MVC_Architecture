import { Router } from "express";

import productController from "../../controller/product/index.js";
const productRouter = Router();

productRouter.get("/getProducts", productController.getProduct);
productRouter.post("/createProduct", productController.createProduct);
productRouter.delete("/deleteProduct", productController.deleteProduct);

export default productRouter;
