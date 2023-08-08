import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import "dotenv/config";

const { DB_HOST, DB_NAME, DB_USER_NAME, DB_PASS } = process.env;

const sequelizeOptions: SequelizeOptions = {
    host: DB_HOST!,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false,
        },
    },
};

export const sequelize = new Sequelize(
    DB_NAME!,
    DB_USER_NAME!,
    DB_PASS!,
    sequelizeOptions
);
