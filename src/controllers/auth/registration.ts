import { Request, Response } from "express";
import { UserModel } from "@/db/models/user";

const registr = (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = UserModel.create({ email, password });

    res.send(user);
};

export const registrationController = { registr };
