import express from "express";
import { sequelize as conection } from "@/db/connections/user";
import { registrationRoute } from "@/routes/auth/registration";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(registrationRoute);

const { PORT = 5010 } = process.env;

const start = async (): Promise<void> => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port 3000");
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
