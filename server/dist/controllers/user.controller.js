"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOtp = exports.register = exports.login = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jwt_utils_1 = require("../utils/jwt.utils");
const filterObj_utils_1 = __importDefault(require("../utils/filterObj.utils"));
const otp_generator_1 = __importDefault(require("otp-generator"));
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email && !password) {
            res.status(400).json({
                status: "error",
                message: "Both Email and Password are required."
            });
            return;
        }
        const user = user_model_1.default.findOne({ email: email }).select("password");
        if (!user || !(yield user.correctPassword(password, user.password)))
            res.status(400).json({
                status: "error",
                message: "Email or password is incorrect",
            });
        const token = (0, jwt_utils_1.signToken)(user._id);
        res.status(200).json({
            status: "Success",
            message: "Logged in successfully",
            token
        });
    });
}
exports.login = login;
function register(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstName, lastName, email, password } = req.body;
        const existing_user = yield user_model_1.default.findOne({ email: email });
        const filteredBody = (0, filterObj_utils_1.default)(req.body, "firstName", "lastName", "email", "password");
        if (existing_user && existing_user.verified) {
            res.status(400).json({
                status: "error",
                message: "Email already in use, Please login.",
            });
        }
        else if (existing_user) {
            yield user_model_1.default.findOneAndUpdate({ email: email }, filteredBody, {
                new: true,
                validateModifiedOnly: true,
            });
            req.userId = existing_user._id;
            next();
        }
        else {
            const new_user = yield user_model_1.default.create(filteredBody);
            req.userId = new_user._id;
            next();
        }
    });
}
exports.register = register;
function sendOtp(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId } = req.body;
        const new_otp = otp_generator_1.default.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
        });
        const otp_expiry_time = Date.now() + 10 * 60 * 1000;
    });
}
exports.sendOtp = sendOtp;
