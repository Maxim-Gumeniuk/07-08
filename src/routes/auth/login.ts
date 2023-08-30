import { loginController } from "@/controllers/auth/login";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { Auth } from "@/types/enums/auth";
import { catchErrors } from "@/utils/cathcErrors";
import express from "express";

export const loginRoute = express.Router();

loginRoute.post(Auth.login, catchErrors(loginController.login));
loginRoute.get(
    "/check",
    catchErrors(authMiddleware),
    catchErrors(loginController.checkAuth)
); //created for check auth
