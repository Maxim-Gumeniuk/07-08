import { Model } from "sequelize-typescript";

export type UserModelType = {
    email: string;
    password?: string;
    activationToken: string | null;
} & Model;
