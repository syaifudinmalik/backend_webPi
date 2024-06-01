import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import MemberRoute from "./routes/MemberRoute.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import session from "express-session";
import GoogleStrategy from "passport-google-oauth20";
import User from "../backend/models/UserModel.js";
// import ps from '../backend/controllers/passport-setup.js'
import authRouter from "./routes/auth.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:3000"],
    credentials: true,
  })
);


app.use(express.json());
app.use(UserRoute);
app.use(MemberRoute);
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRouter)


mongoose.connect("mongodb://127.0.0.1:27017/pemkab_kesra");

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.listen(3000, () => console.log("Server up and running..."));
