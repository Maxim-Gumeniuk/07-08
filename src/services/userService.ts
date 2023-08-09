import { UserModel } from "@/db/models/user";

function getByEmail(email: string) {
    return UserModel.findOne({ where: { email } });
}

export const userService = { getByEmail };
