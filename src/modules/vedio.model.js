import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const   VideoSchema  = new Schema(
    {
        videofile:{
            type:String,  // cloudibnary url
            required :true,

        },

        thumbnail:{
            type:String,
            required:true
        },
        tite:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
       duration:{
            type:Number, // cloudnary url 
            required:true
        },
        views:{
            type:Number,
            default:0
        },
       ispublish:{
            type:Boolean,
            default:true
        },
      owner:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
        },
    },
    {
        timestamps:true
    }
)

VideoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model("video",VideoSchema)


