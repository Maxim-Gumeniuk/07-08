import express from "express";
import { sequelize as conection } from "@/db/connections/user";
import { registrationRoute } from "@/routes/auth/registration";
import cors from "cors";
import "dotenv/config";
import { loginRoute } from "./routes/auth/login";

const { PORT = 5010, CORS_ORIGIN } = process.env;
const app = express();

app.use(
    cors({
        origin: CORS_ORIGIN,
        credentials: true,
    })
);
app.use(express.json());
app.use(registrationRoute);
app.use(loginRoute);

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
