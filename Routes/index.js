import { Router } from "express";
import productrouter from "./Product.routes.js";
import authrouter from "./Auth.routes.js";
import userrouter from "./User.routes.js";

const router = Router();

router.use('/products',productrouter);
router.use('/auth',authrouter);
router.use('/user',userrouter);

export default router;