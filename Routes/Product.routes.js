import { Router } from "express";
import { Addproducts, getAllproducts, getSingleProduct } from "../Controllers/Product.controller.js";

const productrouter = Router();

productrouter.post('/add-products',Addproducts);
productrouter.get('/get-all-products',getAllproducts);
productrouter.get('/get-single-product',getSingleProduct);

export default productrouter;