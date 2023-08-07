import { DataTypes } from "sequelize";
import { sequelize as conection } from "@/db/connections/user";
import { Model } from "sequelize-typescript";

type UserModel = {
    email: string;
    password: string;
} & Model;

export const UserModel = conection.define<UserModel>("User", {
    email: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});