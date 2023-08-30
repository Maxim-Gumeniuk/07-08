import express from "express";
import { Auth } from "@/types/enums/auth";
import { registrationController } from "@/controllers/auth/registration";
import { catchErrors } from "@/utils/cathcErrors";

export const registrationRoute = express.Router();

registrationRoute.post(
    Auth.registration,
    catchErrors(registrationController.registr)
);
registrationRoute.get(
    `${Auth.activation}/:activationToken`,
    catchErrors(registrationController.activate)
);
