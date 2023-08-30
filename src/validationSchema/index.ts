import { ApiError } from "@/exeptions/ApiError";
import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const authValidation = [
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),
    body("password")
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage("Password is required and should have min 8 characters"),
];

function validateFunc(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().map(({ msg }) => {
            throw ApiError.BadRequest(msg);
        });
    }
    next();
}

export const validation = { authValidation, validateFunc };
