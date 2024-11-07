// require('dotenv').config({path: './env})---> not good 
import dotenv from 'dotenv'
import express from 'express';
import connectDB from './db/index.js';
// import mongoose from "mongoose";;
// import { DB_NAME} from "constant";
const app=express();
dotenv.config({
    path:"./env"
})
/*
second aproched 
*/ 

connectDB()
// after connected your db listen the app 
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running at the port : ${process.env.PORT}`);
        
    })
    app.on("error",(error)=>{  // if app not listen at the port then 
        console.log('its showing the error : ',error);
        throw error
    })
})
.catch((error)=>{
    console.log(":this is connection errro : ",error); 
})





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