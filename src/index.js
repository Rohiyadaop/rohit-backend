// require('dotenv').config({path: './env})---> not good 
import dotenv from 'dotenv'
// import express from 'express';
import connectDB from './db/index.js';
// import mongoose from "mongoose";;
// import { DB_NAME} from "constant";
// const app=express();
dotenv.config({
    path:"./env"
})
/*
second aproched 
*/ 

connectDB()







// function connectDB(){

// }
// connectDB()

// you can make the ifee function


// ;( async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}\ ${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log(error);
//         throw error
//       })

//       app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on the port ${process.env.PORT}`);
        
//       })
//     } catch (error) {
//         console.log("error: "),error; 
//         throw error
        
//     }
// })()