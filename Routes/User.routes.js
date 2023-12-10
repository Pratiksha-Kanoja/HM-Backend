import { Router } from "express";
import { addCart, deleteCart, yourCart } from "../Controllers/User.controller.js";

const userrouter = Router();

userrouter.post('/add-cart',addCart);
userrouter.get('/your-cart',yourCart);
userrouter.post('/delete-cart',deleteCart);

export default userrouter;