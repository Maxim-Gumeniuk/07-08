import { UserModelType } from "@/types/userModel";
import "dotenv/config";
import jwt from "jsonwebtoken";

const { ACCES_TOKEN_KEY } = process.env;

function generateAccesToken(user: UserModelType) {
    return jwt.sign(user.toJSON(), ACCES_TOKEN_KEY!);
}

function verifyAccesToken(token: string) {
    try {
        return jwt.verify(token, ACCES_TOKEN_KEY!);
    } catch (e) {
        return null;
    }
}

export const jwtService = { generateAccesToken, verifyAccesToken };
