import app from './app'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import http from 'http'

dotenv.config({ path: './config.env' })

process.on("uncaughtException", (err) => {
    console.log(err);
    process.exit(1)
})

const server = http.createServer(app)
const DBURI = process.env.DBURI?.replace("<password>", process.env.DBPASSWORD as string) as string

// Todo: options pass nhi kiye hai isme
mongoose.connect(DBURI).then(() => {
    console.log("SERVER IS CONNECTED TO DB ");

}).catch((err) => {
    console.log(err);

})

const port = process.env.PORT || 8000

server.listen(port, () => {
    console.log(`server running on port ${port}`);
})

process.on("unhandledRejection", (err) => {
    console.log(err);
    server.close(() => {
        process.exit(1)
    })
})