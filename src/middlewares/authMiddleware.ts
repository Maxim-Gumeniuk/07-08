import { jwtService } from "@/services/jwtService";
import { Statuses } from "@/types/enums/statuses";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        res.sendStatus(Statuses.Not_Auth);
        return;
    }

    const [, accesToken] = authHeader.split(" ");

    if (!accesToken) {
        res.sendStatus(Statuses.Not_Auth);
        return;
    }

    const userData = jwtService.verifyAccesToken(accesToken);

    if (!userData) {
        res.sendStatus(Statuses.Not_Auth);
        return;
    }

    next();
};
