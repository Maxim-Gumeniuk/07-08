import { NextFunction, Request, Response } from "express";

export const catchErrors = (
    action: (
        req: Request,
        res: Response,
        next: NextFunction
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => Promise<any> | void
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await action(req, res, next);
        } catch (e) {
            next(e);
        }
    };
};
