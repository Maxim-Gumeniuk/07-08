import { Statuses } from "@/types/enums/statuses";

export class ApiError extends Error {
    status: number;
    errors: object;
    constructor(status: number, message: string, errors = {}) {
        super(message);

        this.status = status;
        this.errors = errors;
    }

    static NotAuthorized() {
        return new ApiError(Statuses.Not_Auth, "User is not auth");
    }

    static BadRequest(message: string, errors = {}) {
        return new ApiError(Statuses.Bad_Req, message, errors);
    }

    static NotFound(message: string, errors = {}) {
        return new ApiError(Statuses.Not_found, message, errors);
    }
}
