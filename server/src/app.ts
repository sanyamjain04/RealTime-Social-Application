import express from 'express'
import morgan from 'morgan'  // HTTP request logger middleware for node.js
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
app.use(express.urlencoded({
    extended: true,
}))

app.use(mongoSanitize())

// Todo: solve the error
// app.use(xss())

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'PATCH', 'POST', 'DELETE', 'PUT'],
        credentials: true
    }
))
app.use(express.json({ limit: "10kb" }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"))
}
const limiter = rateLimit({
    max: 3000,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: "Too many request from this IP , Please try again in the Future."
})

app.use("/tawk", limiter);

export default app
