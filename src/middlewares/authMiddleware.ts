import { ApiError } from "@/exeptions/ApiError";
import { jwtService } from "@/services/jwtService";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        throw ApiError.NotAuthorized();
    }

    const [, accesToken] = authHeader.split(" ");

    if (!accesToken) {
        throw ApiError.NotAuthorized();
    }

    const userData = jwtService.verifyAccesToken(accesToken);

    if (!userData) {
        throw ApiError.NotAuthorized();
    }

    next();
};
