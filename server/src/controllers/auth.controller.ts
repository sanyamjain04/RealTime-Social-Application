import User from '../models/user.model';
import { NextFunction, Request, Response } from 'express';
import { signToken } from '../utils/jwt.utils';
import filterObj from '../utils/filterObj.utils';
import { generate } from 'otp-generator';
import otpTemplate from '../templates/mail/sendOtp';
import mailService from '../services/mailer';
import bcrypt from 'bcrypt'
import crypto from 'crypto';
import response from '../utils/response';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';

export async function login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
        return response(res, 'Both Email and Password are required.', 400);
    }

    const user = await User.findOne({ email: email }).select('+password');
    if (!user) {
        return response(res, 'User does not Exist.', 400);
    } else if (!user.verified) {
        return response(res, 'Email is not verified! Please Register Again.', 400);
    } else if (!(await user.correctPassword(password, user.password))) {
        return response(res, 'Email or Password is Incorrect.', 400);
    }

    const token = signToken(Number(user._id));
    return response(res, 'Logged In Successfully.', 200, token);
}

export async function register(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName)
        return response(res, 'Please Enter all details.', 400);

    const existing_user = await User.findOne({ email: email });

    const allowedFields = ['firstName', 'lastName', 'email', 'password'];
    // @ts-ignore
    const filteredBody = filterObj(req.body, allowedFields);

    if (existing_user && existing_user.verified) {
        // user with this email already exists, Please login
        return response(res, 'Email already in use, Please login.', 400);
    } else if (existing_user) {
        // if not verified than update prev one
        const hashedPassword = await bcrypt.hash(password, 12);
        filteredBody['password'] = hashedPassword

        await User.findOneAndUpdate({ email: email }, filteredBody, {
            new: true,
            validateModifiedOnly: true,
        });

        // generate an otp and send to email
        req.body.userId = existing_user._id;
    } else {
        // if user is not created before then create a new one
        const new_user = await User.create(filteredBody);
        req.body.userId = new_user._id;
    }
    next();
}

export async function sendOTP(req: Request, res: Response) {
    const { userId } = req.body;
    if (!userId) return response(res, 'userid not therw', 400);

    const new_otp = generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
    });
    console.log(new_otp);

    const otp_expiry_time = Date.now() + 10 * 60 * 1000; // 10 mins

    const user = await User.findByIdAndUpdate(userId, {
        otp_expiry_time: otp_expiry_time,
    });

    if (!user) return response(res, 'User does not Exist.', 400);

    user.otp = new_otp;

    await user.save({ validateModifiedOnly: true });

    mailService({
        to: user.email,
        subject: 'Verification OTP',
        html: otpTemplate(user.firstName, new_otp),
    });

    return response(res, 'OTP send successfully', 200);
}

export const verifyOTP = async (req: Request, res: Response) => {
    try {
        // verify otp and update user accordingly
        const { email, otp } = req.body;
        const user = await User.findOne({
            email,
            otp_expiry_time: { $gt: Date.now() },
        });

        if (!user) {
            return response(res, 'Email is Invalid or OTP Expired.', 400);
        }

        if (user.verified) {
            return response(res, 'Email is already verified.', 400);
        }

        if (!(await user.correctOTP(otp, user.otp as string))) {
            return response(res, 'OTP is Incorrect.', 400);
        }

        // OTP is correct
        user.verified = true;
        user.otp = undefined;

        await user.save({ validateModifiedOnly: true });

        const token = signToken(user._id);

        return response(res, 'OTP verified Successfully.', 200, token);
    } catch (error) {
        // @ts-ignore
        response(res, error?.message, 400);
    }
};

// export const protect = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     let token;
//     if (
//         req.headers.authorization &&
//         req.headers.authorization.startsWith('Bearer')
//     ) {
//         token = req.headers.authorization.split(' ')[1];
//     } else if (req.cookies.jwt) {
//         token = req.cookies.jwt;
//     }

//     if (!token) {
//         return res.status(400).json({
//             status: 'Error',
//             message: 'you are not logged in! Please log in to get access',
//         });
//     }
//     // 2) Verification of token
//     const decoded = await promisify(jwt.verify)(token);

//     // 3) Check if user still exists

//     const this_user = await User.findById(decoded.userId);
//     if (!this_user) {
//         return next(
//             new AppError(
//                 'The user belonging to this token does no longer exists.',
//                 401
//             )
//         );
//     }
//     // 4) Check if user changed password after the token was issued
//     if (this_user.changedPasswordAfter(decoded.iat)) {
//         return next(
//             new AppError('User recently changed password! Please log in again.', 401)
//         );
//     }

//     // GRANT ACCESS TO PROTECTED ROUTE
//     req.user = this_user;
//     next();
// };

export const forgetPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
        return response(res, 'User does not Exists!', 200);
    }

    const resetToken = await user.createPasswordToken();

    try {
        const resetURL = `https://tawk.com/auth/reset-password/${resetToken}`;
        // TODO => Send Email with this Reset URL to user's email address

        console.log(resetToken, resetURL);
        return response(res, 'Token sent to Email.', 200);
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });

        return response(res, 'Something went wrong!', 400);
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    const hashedtoken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const user = await User.findOne({
        passwordResetToken: hashedtoken,
        passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
        return response(res, 'Token is Invalid or Expired.', 400);
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    const token = signToken(user._id);

    return response(res, 'Logged In Successfully.', 200, token);
};
