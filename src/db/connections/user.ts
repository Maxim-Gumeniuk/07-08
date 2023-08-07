import { Sequelize } from "sequelize-typescript";
import "dotenv/config";

const { DB_NAME, DB_OWNER_NAME, DB_PASSWORD } = process.env;

export const sequelize = new Sequelize(DB_NAME!, DB_OWNER_NAME!, DB_PASSWORD!, {
    host: "localhost",
    dialect: "postgres",
});
