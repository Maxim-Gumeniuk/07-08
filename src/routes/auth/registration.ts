import express from "express";
import { Auth } from "@/types/enums/auth";
import { registrationController } from "@/controllers/auth/registration";
import { catchErrors } from "@/utils/cathcErrors";
import { validation } from "@/validationSchema";
export const registrationRoute = express.Router();

registrationRoute.post(
    Auth.registration,
    validation.authValidation,
    validation.validateFunc,
    catchErrors(registrationController.registr)
);
registrationRoute.get(
    `${Auth.activation}/:activationToken`,
    catchErrors(registrationController.activate)
);
