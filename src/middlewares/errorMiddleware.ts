import { ApiError } from "@/exeptions/ApiError";
import { Statuses } from "@/types/enums/statuses";
import { Request, Response } from "express";

export function errorMiddleWare(
    error: typeof Error,
    req: Request,
    res: Response
) {
    if (error instanceof ApiError) {
        const { status, message, errors } = error;

        res.status(status).send({
            message,
            errors,
        });
    }

    res.send(Statuses.Bad_Req);
}
