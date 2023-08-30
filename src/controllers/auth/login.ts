import { ApiError } from "@/exeptions/ApiError";
import { normalizeUser } from "@/helpers/normalizeUser";
import { jwtService } from "@/services/jwtService";
import { userService } from "@/services/userService";
import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await userService.getByEmail(email);

    if (password !== user?.password) {
        throw ApiError.BadRequest("Password is Wrong");
    }
    const normalUser = normalizeUser(user!);
    const accesToken = jwtService.generateAccesToken(user!); ///maybe only email
    res.send({
        user: normalUser,
        accesToken,
    });
};

const checkAuth = (req: Request, res: Response) => {
    res.send("hello word");
};

export const loginController = { login, checkAuth };
