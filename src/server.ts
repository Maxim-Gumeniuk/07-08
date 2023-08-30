import express from "express";
import { sequelize as conection } from "@/db/connections/user";
import { registrationRoute } from "@/routes/auth/registration";
import cors from "cors";
import "dotenv/config";
import { loginRoute } from "./routes/auth/login";
import { errorMiddleWare } from "./middlewares/errorMiddleware";

const { PORT = 5010, CORS_ORIGIN } = process.env;
const app = express();

const appUseArray = [
    {
        value: cors({
            origin: CORS_ORIGIN,
            credentials: true,
        }),
    },
    {
        value: express.json(),
    },
    {
        value: registrationRoute,
    },
    {
        value: loginRoute,
    },
    {
        value: errorMiddleWare,
    },
];

appUseArray.forEach(({ value }) => app.use(value));

const start = async (): Promise<void> => {
    try {
        app.listen(PORT, () => {
            console.log("Server started");
        });

        conection.sync().then(() => {
            console.log("Database and tables created!");
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void start();
