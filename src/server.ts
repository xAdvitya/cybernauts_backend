import express, { Request } from 'express';
import dbConnect from './utils/dbConnect';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from "./routes/user.routes"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

dbConnect();

app.use("/api",userRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
