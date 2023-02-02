import { Schema, model, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

interface IUser {
    firstName: string;
    lastName: string;
    avatar: string;
    email: string;
    verified: boolean;
    otp: string | undefined;
    otp_expiry_time: number;
    password: string;
    passwordConfirm: string;
    passwordChangedAt: Date;
    passwordResetToken: string | undefined;
    passwordResetExpires: Date | undefined;
    createdAt: Date;
    updatedAt: Date;
}

interface IUserMethods {
    correctPassword(
        candidatePassword: string,
        userPassword: string
    ): Promise<boolean>;
    correctOTP(candidateOTP: string, userOTP: string): Promise<boolean>;
    createPasswordToken: () => Promise<string>;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    firstName: {
        type: String,
        required: [true, 'First Name is Required'],
    },
    lastName: {
        type: String,
        required: [true, 'First Name is Required'],
    },
    avatar: { type: String },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function (email: string) {
                return String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
            },
            message: (props: { value: string }) =>
                `Email (${props.value}) is Invalid`,
        },
    },
    verified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
    },
    otp_expiry_time: {
        type: Number,
    },
    password: { type: String },
    passwordChangedAt: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

userSchema.pre('save', async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password') || !this.password) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    //! Shift it to next hook // this.passwordChangedAt = Date.now() - 1000;

    next();
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('otp') || !this.otp) return next(); // only run if OTP is modified

    this.otp = await bcrypt.hash(this.otp, 12);
    next();
});

userSchema.methods.correctOTP = async (candidateOTP: string, userOTP: string) =>
    await bcrypt.compare(candidateOTP, userOTP);


userSchema.methods.createPasswordToken = async function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha26')
        .update(resetToken)
        .digest('hex');

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

userSchema.methods.correctPassword = async (
    candidatePassword: string,
    userPassword: string
) => await bcrypt.compare(candidatePassword, userPassword);

const userModel = model<IUser, UserModel>('User', userSchema);

export default userModel;
