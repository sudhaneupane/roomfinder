import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

//import routers
import userRouter from './routers/user.router.js'

//router declaration
app.use('/api/v1/user',userRouter)

// app.use('/',(req,res)=>{
//   res.send("hello")
// })

export { app };
