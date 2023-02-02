import app from './app';
import mongoose from 'mongoose';


const DBURI = process.env.DBURI?.replace("<password>", process.env.DBPASSWORD as string) as string
mongoose.set('strictQuery', true);
mongoose.connect(DBURI).then(() => {
    console.log("SERVER IS CONNECTED TO DB ");
}).catch((err) => {
    console.log(err);
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
