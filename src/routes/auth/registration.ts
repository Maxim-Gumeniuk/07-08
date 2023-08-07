import express from "express";
import { Auth } from "@/types/enums/auth";
import { registrationController } from "@/controllers/auth/registration";

export const registrationRoute = express.Router();

registrationRoute.post(Auth.registraion, registrationController.registr);
