import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "@/db/models/user";
import { emailService } from "@/services/emailService";
import { ApiError } from "@/exeptions/ApiError";
import { getByEmail } from "@/services/userService";

const registr = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const activationToken = uuidv4();
    const existenUser = await getByEmail(email);

    if (existenUser) {
        throw ApiError.BadRequest("user exist");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await UserModel.create({
        email,
        password,
        activationToken,
    });
    emailService.sendActivationLink(email, activationToken);
    res.send({ message: "OK" });
};

const activate = async (req: Request) => {
    const { activationToken } = req.params;

    const user = await UserModel.findOne({ where: { activationToken } });

    if (!user) {
        throw ApiError.NotFound("User Not Found");
    }

    user.activationToken = null;
    await user.save();
};

export const registrationController = { registr, activate };
