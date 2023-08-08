import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "@/db/models/user";
import { emailService } from "@/services/emailService";
import { Statuses } from "@/types/enums/statuses";

const registr = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const activationToken = uuidv4();
    const user = UserModel.create({ email, password, activationToken });
    emailService.sendActivationLink(email, activationToken);
    res.send(user);
};

const activate = async (req: Request, res: Response) => {
    const { activationToken } = req.params;

    const user = await UserModel.findOne({ where: { activationToken } });

    if (!user) {
        res.sendStatus(Statuses.Not_found);
        return;
    }

    user.activationToken = null;
    await user.save();
};

export const registrationController = { registr, activate };
