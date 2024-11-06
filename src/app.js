import express from 'express'
import cors from'cors'
import cookieParser from 'cookie-parser';
const app =express();


app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential: true
}))
// this is setting for comming the data limit between the different formate 
app.use(cookieParser())
app.use(express.static("temp"))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.json({limit:"16kb"}))

export {app}