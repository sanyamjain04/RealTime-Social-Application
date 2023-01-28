import { Schema, model, Document, Model } from "mongoose";
import bcrypt from 'bcrypt'

interface IUser {
    firstName: string
    lastName: string
    avatar: string
    email: string
    verified: boolean
    otp: number
    otp_expiry_time: Date
    password: string
    passwordChangedAt: Date
    passwordResetToken: string
    passwordResetExpires: Date
    createdAt: Date
    updatedAt: Date
}

interface IUserMethods {
    correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;
}

type UserModel = Model<IUser, {}, IUserMethods>

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    firstName: {
        type: String,
        required: [true, "First Name is Required"]
    },
    lastName: {
        type: String,
        required: [true, "First Name is Required"]
    },
    avatar: { type: String },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: function (email: string) {
                return String(email).toLowerCase().match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
            },
            message: (props: { value: string }) => `Email (${props.value}) is Invalid`,
        }
    },
    verified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: Number,
    },
    otp_expiry_time: {
        type: Date,
    },
    password: { type: String },
    passwordChangedAt: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
    createdAt: { type: Date },
    updatedAt: { type: Date }
})

userSchema.methods.correctPassword = async (candidatePassword: string, userPassword: string) => {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const UserModel = model<IUser, UserModel>("User", userSchema)

export default UserModel;