import { Router } from "express";
import { Login, Register, getCurrentUser } from "../Controllers/Auth.controller.js";

const authrouter = Router();

authrouter.post('/register',Register);
authrouter.post('/login',Login);
authrouter.post('/get-current-user',getCurrentUser);

export default authrouter;