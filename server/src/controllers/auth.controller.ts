import User from '../models/user.model';
import { NextFunction, Request, Response } from 'express';
import { signToken } from '../utils/jwt.utils';
import filterObj from '../utils/filterObj.utils';
import otp from 'otp-generator';
import otpTemplate from '../templates/mail/sendOtp';
import mailService from '../services/mailer';
import crypto from 'crypto';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';

export async function login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email && !password) {
        return res.status(400).json({
            status: 'Error',
            message: 'Both Email and Password are required.',
        });
    }

    const user = await User.findOne({ email: email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
        return res.status(400).json({
            status: 'Error',
            message: 'Email or password is incorrect',
        });
    }

    const token = signToken(Number(user._id));

    res.status(200).json({
        status: 'Success',
        message: 'Logged in successfully',
        token,
    });
}

export async function register(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { email } = req.body;

    const existing_user = await User.findOne({ email: email });

    const allowedFields = ['firstName', 'lastName', 'email', 'password'];
    // @ts-ignore
    const filteredBody = filterObj(req.body, allowedFields);

    if (existing_user && existing_user.verified) {
        // user with this email already exists, Please login
        return res.status(400).json({
            status: 'Error',
            message: 'Email already in use, Please login.',
        });
    } else if (existing_user) {
        // if not verified than update prev one
        await User.findOneAndUpdate({ email: email }, filteredBody, {
            new: true,
            validateModifiedOnly: true,
        });

        // generate an otp and send to email
        (req as any).userId = existing_user._id;
    } else {
        // if user is not created before then create a new one
        const new_user = await User.create(filteredBody);
        (req as any).userId = new_user._id;
    }
    next();
}

export async function sendOTP(req: Request, res: Response) {
    const { userId } = req.body;
    const new_otp = otp.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
    });

    const otp_expiry_time = Date.now() + 10 * 60 * 1000; // 10 mins

    const user = await User.findByIdAndUpdate(userId, {
        otp_expiry_time: otp_expiry_time,
    });

    user!.otp = new_otp;

    await user!.save({ validateModifiedOnly: true });

    console.log(new_otp);

    mailService({
        to: user!.email,
        subject: 'Verification OTP',
        html: otpTemplate(user!.firstName, new_otp),
    });

    res.status(200).json({
        status: 'success',
        message: 'OTP Sent Successfully!',
    });
}

export const verifyOTP = async (req: Request, res: Response) => {
    // verify otp and update user accordingly
    const { email, otp } = req.body;
    const user = await User.findOne({
        email,
        otp_expiry_time: { $gt: Date.now() },
    });

    if (!user) {
        return res.status(400).json({
            status: 'error',
            message: 'Email is invalid or OTP expired',
        });
    }

    if (user.verified) {
        return res.status(400).json({
            status: 'error',
            message: 'Email is already verified',
        });
    }

    if (!(await user.correctOTP(otp, user.otp as string))) {
        return res.status(400).json({
            status: 'error',
            message: 'OTP is incorrect',
        });
    }

    // OTP is correct

    user.verified = true;
    user.otp = undefined;
    await user.save({ validateModifiedOnly: true });

    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        message: 'OTP verified Successfully!',
        token,
    });
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
        return res.status(400).json({
            status: 'Error',
            message: 'User does not exists.',
        });
    }

    const resetToken = await user.createPasswordToken();

    try {
        const resetURL = `https://tawk.com/auth/reset-password/${resetToken}`;
        // TODO => Send Email with this Reset URL to user's email address

        console.log(resetToken);

        res.status(200).json({
            status: 'success',
            message: 'Token sent to email!',
        });
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });

        return res.status(500).json({
            status: 'Error',
            message: 'Server Error',
        });
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
        res.status(400).json({
            status: 'Error',
            message: 'Token is Invalid or Expired.',
        });
    }

    user!.password = req.body.password;
    user!.passwordConfirm = req.body.passwordConfirm;
    user!.passwordResetToken = undefined;
    user!.passwordResetExpires = undefined;
    await user!.save();

    const token = signToken(user?._id);

    res.status(200).json({
        status: 'Success',
        message: 'Logged In Successfully',
        token,
    });
};
