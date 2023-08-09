import { loginController } from "@/controllers/auth/login";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { Auth } from "@/types/enums/auth";
import express from "express";

export const loginRoute = express.Router();

loginRoute.post(Auth.login, loginController.login);
loginRoute.get("/check", authMiddleware, loginController.checkAuth);
