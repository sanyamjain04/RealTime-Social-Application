import { Response } from "express";

type ResponseBody = {
    status: string
    message: string
    token?: string
}

export default function handleError(res: Response, message: string, statusCode: number, token?: string) {
    const responseBody: ResponseBody = {
        status: statusCode === 400 ? 'Error' : 'Success',
        message,
    };

    if (token) {
        responseBody.token = token;
    }

    return res.status(statusCode).json(responseBody);
}