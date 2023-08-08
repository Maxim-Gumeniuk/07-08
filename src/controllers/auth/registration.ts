import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "@/db/models/user";
import { emailService } from "@/services/emailService";

const registr = (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = UserModel.create({ email, password });
    const activationToken = uuidv4();
    emailService.sendActivationLink(email, activationToken);
    res.send(user);
};

export const registrationController = { registr };
