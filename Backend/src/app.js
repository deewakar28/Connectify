import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from '../src/routes/auth.route';
import messageRoutes from '../src/routes/message.route';

const app = express();
const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

export {app, port};
