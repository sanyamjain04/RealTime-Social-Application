import jwt from 'jsonwebtoken'
import User from '../models/user.model'
import { NextFunction, Request, Response } from 'express'
import { signToken } from '../utils/jwt.utils';
import filterObj from '../utils/filterObj.utils';
import otp from 'otp-generator'

export async function login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email && !password) {
        res.status(400).json({
            status: "error",
            message: "Both Email and Password are required."
        })
        return;
    }

    const user = User.findOne({ email: email }).select("password")
    // Todo: Check the types below
    // @ts-ignore
    if (!user || !(await user.correctPassword(password, user.password))) res.status(400).json({
        status: "error",
        message: "Email or password is incorrect",
    })

    // @ts-ignore
    const token = signToken(user._id)

    res.status(200).json({
        status: "Success",
        message: "Logged in successfully",
        token
    })

}

export async function register(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, email, password } = req.body;
    const existing_user = await User.findOne({ email: email });
    const filteredBody = filterObj(
        req.body,
        "firstName",
        "lastName",
        "email",
        "password"
    );
    if (existing_user && existing_user.verified) {  // user with this email already exists, Please login

        res.status(400).json({
            status: "error",
            message: "Email already in use, Please login.",
        });
    } else if (existing_user) { // if not verified than update prev one


        await User.findOneAndUpdate({ email: email }, filteredBody, {
            new: true,
            validateModifiedOnly: true,
        });

        // generate an otp and send to email
        req.userId = existing_user._id;
        next();
    } else {
        // if user is not created before than create a new one
        const new_user = await User.create(filteredBody);

        // generate an otp and send to email
        req.userId = new_user._id;
        next();
    }

}

export async function sendOtp(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.body
    const new_otp = otp.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
    })

    const otp_expiry_time = Date.now() + 10 * 60 * 1000 // 10 mins
    // await  
}
