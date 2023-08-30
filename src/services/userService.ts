import { UserModel } from "@/db/models/user";

export async function getByEmail(email: string) {
    const user = await UserModel.findOne({ where: { email } });

    return user;
}

export const userService = { getByEmail };
