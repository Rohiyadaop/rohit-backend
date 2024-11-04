import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB=async ()=>{
    try {
        const connectioninstanse= await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        console.log(connectioninstanse.connection.host);
        
    } catch (error) {
        console.log(`Error connection : `,error)
        // throw error
        process.exit(1) // overload and exit the process
    }
}
export default connectDB