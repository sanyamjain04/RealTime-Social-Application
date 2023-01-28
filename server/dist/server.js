"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
dotenv_1.default.config({ path: './config.env' });
process.on("uncaughtException", (err) => {
    console.log(err);
    process.exit(1);
});
const server = http_1.default.createServer(app_1.default);
const DBURI = (_a = process.env.DBURI) === null || _a === void 0 ? void 0 : _a.replace("<password>", process.env.DBPASSWORD);
mongoose_1.default.connect(DBURI).then(() => {
    console.log("SERVER IS CONNECTED TO DB ");
}).catch((err) => {
    console.log(err);
});
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`server running on port ${port}`);
});
process.on("unhandledRejection", (err) => {
    console.log(err);
    server.close(() => {
        process.exit(1);
    });
});
