import { DataTypes } from "sequelize";
import { sequelize as conection } from "@/db/connections/user";
import { UserModelType } from "@/types/userModel";

export const UserModel = conection.define<UserModelType>("User", {
    email: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activationToken: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
